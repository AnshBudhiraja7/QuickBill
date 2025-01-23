const express = require("express");
const { generateotp, verifyotp } = require("../Services/OtpService/OtpService");
const {otptoemailforverification} = require("../Services/EmailService/EmailService");
const { User, Shopkeeper } = require("../Model/UserModel/UserModel");
const Product=require("../Model/ProductModel/ProductModel")
const HandleResponse=require("../HandleResponse/HandleResponse")
const Routes = express.Router();

Routes.get("/HealthCheckApi", async (req, resp) =>HandleResponse(resp,202,"Server Health is Okay"))
Routes.post("/verifyshopkeeper", async (req, resp) => {
  try {
    const { name, phone, email, password, address, city, state } = req.body;

    if (!name || !phone || !email || !password || !city || !address || !state) return HandleResponse(resp,404,"Field is Empty")

    const existinguser = await User.findOne({ email });
    if (existinguser) return HandleResponse(resp,400,"Account already exists")

    const otp = generateotp(email);
    return await otptoemailforverification(resp, email, otp);
  } catch (error) {
    return HandleResponse(resp,500,"Internal Server Error",null,error);
  }
});
Routes.post("/createshopkeeper", async (req, resp) => {
  try {
    const { name, phone, email, address, password, city, state, otp } =req.body;

    if (!name || !phone || !email || !address || !city || !state || !password) return HandleResponse(resp,404,"Field is Empty")

    if (!otp) return HandleResponse(resp,404,"Enter the otp");

    const existinguser = await User.findOne({ email });
    if (existinguser) return HandleResponse(resp,400,"Account already exists")

    const response = verifyotp(email, otp);
    if (!response.status) return HandleResponse(resp,404,response.message);

    const result = await Shopkeeper.create({name,phone,email,password,address,city,state});
    return HandleResponse(resp,201,"Account created successfully",result);
  } catch (error) {
    return HandleResponse(resp,500,"Internal Server error",null,error)
  }
});
Routes.post("/login", async (req, resp) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return HandleResponse(resp,404,"Field is Empty");

    const result = await User.findOne({ email });
    if (!result) return HandleResponse(resp,401,"Invalid Email");

    if (password === result.password) {
      if (!result.service) return HandleResponse(resp,401,"Your service is disabled");
      return HandleResponse(resp,202,"login successfully",result._id)
    }
    return HandleResponse(resp,401,"Invalid Password");
  } catch (error) {
    return HandleResponse(resp,500,"Internal Server error",null,error);
  }
});
Routes.post("/enable", async (req, resp) => {
  try {
    const { id } = req.body;
    if (!id) return HandleResponse(resp,404,"Plz Select the user");

    const existinguser = await User.findOne({ _id: id });
    if (!existinguser) return HandleResponse(resp,404,"User is not found");

    const result = await User.updateOne({ _id: id },{ $set: { service: true } });
    return HandleResponse(resp,202,"Service is enabled",result)
  } catch (error) {
    return HandleResponse(resp,500,"Internal Server error",null,error)
  }
});
Routes.post("/disable", async (req, resp) => {
  try {
    const { id } = req.body;
    if (!id) return HandleResponse(resp,404,"Plz Select the user");

    const existinguser = await User.findOne({ _id: id });
    if (!existinguser) return HandleResponse(resp,404,"User is not found");

    const result = await User.updateOne({ _id: id },{ $set: { service: false } });
    return HandleResponse(resp,202,"Service is disabled",result)
  } catch (error) {
    return HandleResponse(resp,500,"Internal Server error",null,error)
  }
});


Routes.post("/addproduct",async(req,resp)=>{
    try {
        const {name,company,model,description,price,discount,rate,tax,stock}=req.body
        if(!name ||!company ||!model ||!description ||!price ||!discount ||!rate ||!tax) return HandleResponse(resp,404,"Field is Empty")
        
        const existingproduct=await Product.findOne({model})
        if(existingproduct) return HandleResponse(resp,400,"Product of this model already exists")
        
        const newproduct=await Product.create({userid:req.user._id,name,company,model,description,price,discount,rate,tax,stock})
        return HandleResponse(resp,201,"Product added successfully",newproduct)
    } catch (error) {
        return HandleResponse(resp,500,"Internal Server error",null, error )
    }
})
Routes.get("/getproducts",async(req,resp)=>{
    try {
        const allproducts=await Product.find({userid:req.user._id})
        if(allproducts.length===0) return HandleResponse(resp,404,"Your product list is empty")
        
        return HandleResponse(resp,202,"All Products successfully fetched",allproducts)
    } catch (error) {
      return HandleResponse(resp,500,"Internal Server error",null, error )       
    }
})
Routes.delete("/deleteproduct/:id",async(req,resp)=>{
    try {
        const {id}=req.params
        if(!id) return HandleResponse(resp,404,"Plz select the product")
        
        const existingproduct=await Product.findOne({_id:id,userid:req.user._id})
        if(!existingproduct) return HandleResponse(resp,404,"This product is not found in your product list.")
        
        const result=await Product.deleteOne({_id:id,userid:req.user._id})
        return HandleResponse(resp,202,"Product deleted successfully",result)
    } catch (error) {
       return HandleResponse(resp,500,"Internal Server error",null, error );
    }
})
Routes.put("/updateproduct/:id",async(req,resp)=>{
    try {
        const {name,company,model,description,price,discount,rate,tax,stock}=req.body
        if(!name ||!company ||!model ||!description ||!price ||!discount ||!rate ||!tax) return HandleResponse(resp,404,"Field is Empty")
        
        const {id}=req.params
        if(!id) return HandleResponse(resp,404,"Plz select the product")

        const existingproduct=await Product.findOne({_id:id,userid:req.user._id})
        if(!existingproduct) return HandleResponse(resp,404,"This product is not found in your product list")
        
        const response=await Product.findOne({model})
        if(response) return HandleResponse(resp,400,"Product of this model is already exists in your product list")

        const updatedproduct=await Product.updateOne({_id:id},{$set:{name,company,model,description,price,discount,rate,tax,stock}})
        return HandleResponse(resp,202,"Product updated successfully",updatedproduct)
    } catch (error) {
        return HandleResponse(resp,500,"Internal Server error",null,error);
    }
})



// const validateObjectKeys = (object, schema) => {
//     const schemaKeys = Object.keys(schema.paths).filter((key) => key !== '__v' && key !== '_id');
//     const objectKeys = Object.keys(object);
  
//     for (const key of schemaKeys) {
//       if (!object.hasOwnProperty(key) || object[key] === null || object[key] === '') return "The key"+key+" is missing or empty."
//     }
  
//     for (const key of objectKeys) {
//       if (!schemaKeys.includes(key)) return "The key"+key+" is not declared in the schema."
//     }

//     return null;
//   };
// Routes.post("/addmultipleproducts",async(req,resp)=>{
//     try {
//         const {items} = req.body;
    
//         if (!Array.isArray(items) || items.length === 0) return resp.status(400).json({ message: 'Invalid input. Provide an array of items.' })
    
//         const errors = [];
//         items.map(async(item,index)=>{
//             const validationError = validateObjectKeys(item, Product.schema);
//             if (validationError) errors.push({ index, error: validationError })
        
//             const existingproduct = await Product.findOne({ model: item.model });
//             if(existingproduct) errors.push({ index, error: "The modelNumber" +item.model+"already exists."})
//         })    
    
//         if(errors.length > 0) return resp.status(400).json({message: 'Validation errors occurred.',errors});
    
//         const result = await Product.insertMany(items);
//         return resp.status(201).json({ message: 'All products are added successfully',result})
//       } catch (error) {
//         return resp.status(500).json({message: 'Internal Server Error'});
//       }
// })

module.exports = Routes;