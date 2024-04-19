import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser' //to perform crud operations on the cookies ke liye we have cookie parser

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

//app.use() this is usually written to mention the middlewares
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true,limit:"16kb"}))
app.use(express.static("public")) //folder name public  to store the static files
//this stores files like favicon, images etc
app.use(cookieParser())

export {app}