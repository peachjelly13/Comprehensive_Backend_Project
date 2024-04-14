//require('dotenv').config({path:'./env'})
// the above syntax destroys the uniformity of the code so we do not prefer it
//hence we do not use require 
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

//as early as possible import and configure .env

dotenv.config({
    path:'./env'
})

//we want that as soon as the file loads that fastly my environment variables are available throught the application
//so we want that the first file that loads has the environment variables

connectDB()
.then(()=>{
    //if we want to throw an error in case our app is not able to connect our express app
    //here the connection is working fine but there is a chance our express ap isnt
    //able to connect
    app.on("error",(error)=>{
        console.log('Application Not Able To Talk To The Database ',error);
        throw error;
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port :
        ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed",err);
})