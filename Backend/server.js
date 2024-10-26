import express from 'express';
import cors from 'cors'
import { connectDB } from './Config/db.js';
import foodRouter from './routes/foodRoutes.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
import cartRouter from './routes/cartToute.js';
import orderRouter from './routes/orderRoute.js';



const app = express();
const port =process.env.PORT || 4000

app.use(express.json());
app.use(cors());


app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter)
app.get("/",(req,res)=>{
    res.send("Api working")
})
connectDB();
app.listen(port,()=>{
console.log(`Server is started at http://localhost:${port}`)
})
// mongodb+srv://Sai:Sai@cluster0.xglyr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0