import mongoose from "mongoose";
import { config } from "dotenv";
config();


const connectDB = () => {
  return mongoose.connect(process.env.MONGO_URI);
};


export default connectDB;
