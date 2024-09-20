import mongoose from 'mongoose';




const connectDb = async () => {
    try{
        await mongoose.connect("mongodb+srv://@todolist.wlbv6.mongodb.net/?retryWrites=true&w=majority&appName=todolist");
        console.log("Database connection successfully established")
    } catch (err){
        console.log(`Error connecting to the database: ${err}`)
    }
}

export default connectDb

