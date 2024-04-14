//require('dotenv').config({path:'./env'})
// the above syntax destroys the uniformity of the code so we do not prefer it
//hence we do not use require 
import dotenv from "dotenv"
import connectDB from "./db/index.js";

//as early as possible import and configure .env

dotenv.config({
    path:'./env'
})

//we want that as soon as the file loads that fastly my environment variables are available throught the application
//so we want that the first file that loads has the environment variables

connectDB()