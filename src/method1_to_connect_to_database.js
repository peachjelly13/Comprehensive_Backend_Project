//the problem with this code is that the index.js would be too clouded 
import mongoose from "mongoose";
import { DB_NAME } from "./constant";
import { express } from "express";
const app = express();
//try and catch explicityly used for errors
//when we want to access the variable from the env we use process.env.variable_name
;(async()=>{
    try{//but to connect we also need the DB_NAME
       await  mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
       
        //await because we are waiting to connect to database
       //in the next line after the connection to the database has been made we will 
       //this error is like the databse is connected but our app is unable to talk
       //this talks about error in the express app
       app.on("error",(error)=>{
        console.log("Application not able to talk to the database",error);
        throw error

       })
       //if the connection rightly established then it will start listening to the port
       //always use process.env to access envirnonment variables
       app.listen(process.env.PORT,()=>{
        console.log("App is listening on PORT",`${process.env.PORT}`)
       })
    }
    catch(error){ //this is the error part 
        console.error("ERROR",error)
        throw err
    }
    //this try catch is for establishing the database if catch will throw an error
    //if we arent able to connect to the database



})() 



// used iffie above and ; so that if a line before this doesnt have a ; then it gets added and
// there is no error
//Here we are connecting the database and the app in the same file but one downfall of this is also the fact that we are 
//polluting our 