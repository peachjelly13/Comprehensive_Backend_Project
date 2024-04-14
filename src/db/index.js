//creating another function to connect to our database
//this is purely connecting to the databse nothing else
import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
//one error i got here was connection instance was not defined 
const connectDB =async () =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`\n Mongo Db connected DB host:${connectionInstance.connection.host}`);

    }
    catch(error){
        console.log('MongoDB Connection error',error);
        process.exit(1);

    }
}
export default connectDB;

//access of process is throught the node its provides access to process throught other than that
//it is like a reference of the process that is going on right now 
//read more about connectionInstance

//read about process and exit what is happenning there read more about it
//connectionInstance.connection.host - what this does is , this is were the mongodb
//connection happens this is what it tells , why we do this that if my mistake instead of
//production you connect to some other databse if by mistake that happens then , so atleast
//you know what host you are connected on


//database made and connection also exported