import mongoose from "mongoose";

export const connectDB = async()=>{
//  mongodb+srv://Sai:Sai@cluster0.xglyr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    await mongoose.connect('mongodb+srv://Sai:Sai@cluster0.xglyr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log('db is connected')).catch((err)=>console.log('errpor in mdb'))
}
