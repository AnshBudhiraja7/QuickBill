const mongoose=require("mongoose")

const BaseSchema = new mongoose.Schema(
  {
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      address:{
        type: String,
        required: true,
      },
      password:{
        type:String,
        required:true
      },
      city:{
        type: String,
        required: true,
      },
      state:{
        type: String,
        required: true,
      },
      service:{
        type:Boolean,
        default:true,
      },
      role: {
        type: String,
        required: true,
        enum: ["shopkeeper","executive"], // Restrict values to "shopkeeper" or "executive"
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    { discriminatorKey: "role", collection: process.env.MONGODB_USER_COLLECTION } // Add a discriminator key for role-based distinction
  );

const User = mongoose.model(process.env.MONGODB_USER_COLLECTION , BaseSchema);

//For Shopkeeper purpose
const ShopkeeperSchema = new mongoose.Schema({
    
});

//For Executive purpose
const ExecutiveSchema = new mongoose.Schema({
  executiveof:{
    type:String,
    required:true
  }
});

// Create discriminator models for Shopkeeper and Executive
const Shopkeeper = User.discriminator("Shopkeeper", ShopkeeperSchema);
const Executive = User.discriminator("Executive", ExecutiveSchema);
module.exports = {User,Shopkeeper,Executive}