import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// add item to user cart
const addToCart = async(req,res)=>{
    try{
        let userData = await userModel.findOne({_id:req.body.userId});
        let cartData = await userData.cartData;
        
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]=1;
        }else{
            cartData[req.body.itemId] +=1;
        }
        console.log(cartData)
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true,message:"Added to cart"})
    }catch(err){
        console.log(err);
        res.json({success:false,message:"Error in addcart"})
    }

}

// remove items from user cart
const removefromcart = async(req,res)=>{
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData =await userData.cartData;
        if(cartData[req.body.itemId]){
            cartData[req.body.itemId] -=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:'true',message:"Removed from cart"})

    }catch(err){
        console.log(err)
        res.json({success:false,message:"error in remove cart"})

    }

}

// fetch user cart data
const getCart = async(req,res)=>{
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success:true,cartData})

    }catch(err){
        console.log(err);
        res.json({success:false,message:"Error in get cart"})

    }

}


export {addToCart,removefromcart,getCart}