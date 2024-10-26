import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator'


const createToken = (id)=>{
      return jwt.sign({id},process.env.JWT_TOKEN)
}
const registerUser = async(req,res)=>{
    const {name,email,password}= req.body
    try{
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"user already exists"})
        }

        if(!validator.isEmail(email)){
            return res.json({success:false,message:"please enter a valid email"})
        }
        if(password.length<5){
            return res.json({success:false,message:"please enter strong digit passwword"})
        }
        const salt  = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password,salt);
        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedpassword
        });
        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success:true,token});


    }catch(err){
        console.log(err)
        res.json({success:false,message:"Error in register page"})
    }

}
const loginUser =async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"User doesnt exists"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({success:false,message:"INVALID Credentials"})
        }
        const token = createToken(user._id);
        res.json({success:true,token})

    }catch(err){
        res.json({success:false,message:"Error in login credentials"})
    }

}

export {loginUser,registerUser}