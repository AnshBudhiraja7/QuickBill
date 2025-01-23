const nodemailer = require('nodemailer');
const HandleResponse = require('../../HandleResponse/HandleResponse');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jayantarora862@gmail.com',
    pass: process.env.EMAIL_SERVICE_PASS
  }
});

const otptoemailforverification=async(resp,email,otp)=>{

    const mailOptions = {
        from: 'jayantarora862@gmail.com',
        to: email,
        subject: 'OTP for Account Creation on Shopkeeper App',
        text: 'Your otp is:'+otp,
      };
      
    try {
        const info= await transporter.sendMail(mailOptions)
        return HandleResponse(resp,202,"Otp sent successfully",info.response)
    } catch (error) {
        return HandleResponse(resp,400,"Email is not valid")
    }
}

module.exports={otptoemailforverification}