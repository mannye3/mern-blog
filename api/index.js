import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(() =>{
    console.log("Connected to MongoDB");
}).catch(err =>{
    console.log(err);
})


const app = express();

app.use(express.json());
 

const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server is up and running on ${PORT}`))

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)