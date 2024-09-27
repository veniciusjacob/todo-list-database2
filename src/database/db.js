import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.DB_URI);
        console.log("Database connection successfully established")
    } catch (err){
        console.log(`Error connecting to the database: ${err}`)
    }
}

export default connectDb

