const userModel = require("../models/userModel")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
require('dotenv').config();
const secretKey = process.env.SECRET_KEY;


module.exports.registerPageController=async (req,res)=>{
    let{name,contact,email,password}=req.body
 
    //existing user

    const check=await userModel.findOne({email});
    if(check)return res.send("already registered");
    
    //new registration 

       await bcrypt.genSalt(10,async function(err,salt){
          await  bcrypt.hash(password,salt,async function(err,hash)
           {
           const newUser= await userModel.create({name, contact, email, password:hash });
           return res.send("registered successfully")
          })
          
    
        })
           
        }
       
      
    
module.exports.loginPageController=async (req,res)=>{
    let{email,password}=req.body
    let user= await userModel.findOne({email})
    console.log(user);

    if(!user)return res.send("kindly register");

    bcrypt.compare(password,user.password,function(err,result){
        if(result){
            var token=jwt.sign({id:user._id,email:user.email},secretKey);
            res.cookie('token',token)
            res.send("valid credentials");
        }
        else{res.send("invalid")}
    })

}

module.exports.logoutPageController=(req,res)=>{
    res.cookie("token","");
    res.send("you have logged out")
}

module.exports.frontPageController=(req,res)=>{
    let{name,age,email,password,dp}=req.user
    console.log(req.user)
    res.send("you can now access all the groups you created")
}

module.exports.showPageController=async (req,res)=>{
    const users=await userModel.find({_id:{$ne:req.user.id}})
    res.send(JSON.stringify(users,null,2));
}
