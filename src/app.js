import mongoose from "mongoose";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
//normal convention is to write this name as app

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials: true
}))
//app.use is used for middlewares and for configurations

export { app }
// a way to export your app 
