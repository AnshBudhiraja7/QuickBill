const HandleResponse=(resp,status,message,data=null,error=null)=>resp.status(status).json({message,data,error})
module.exports=HandleResponse