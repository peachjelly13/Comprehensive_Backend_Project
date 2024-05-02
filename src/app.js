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

//here we will be importing router, we import router in app 
//we keep the index clean
//here routes are not imported at the top but here itself 
 // we are able to import with the name of our choice because the syntax is export default syntax
import userRouter from './routes/user.routes.js'
app.use("/api/v1/users",userRouter)

//http://localhost:8000/api/v1/users/register - so this is what register route would look like






export {app}