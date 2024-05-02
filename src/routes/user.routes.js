import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/register").post(
    upload.fields(
        {
            name:"Avatar",  //frontend should know the name that we are using 
            maxCount:1  
        },
        {
            name:"CoverImage", 
            maxCount:1
        }
    ), // this takes an array  // we are applying middleware before calling our method
    registerUser)

//we can import it like registerUser only when export default is not there
//this will help us to put the images 

export default router;

