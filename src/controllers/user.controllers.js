import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {User} from "../models/user.model.js"

const registerUser = asyncHandler(async(req,res)=>{
    res.status(200).json({
        message:"Ok"
    })
    
    //getting values from the frontend
    const {email,fullname,password,username} = req.body;
    console.log("email: ",email); // testing to be done using postman 
    
    //basically want to throw error if the name is empty 
    //validation step the fileds should not be empty
    if([fullname,email,password,username]
        .some((field)=>field?.trim === "")
    ){
        throw new ApiError(400,"All fields are required")
    }

    //check if user already exists 
    //this process here returns the first user it finds with that email and name
    const existingUsername = User.findOne({
        $or : [ { username }]
    })
    const existingEmail = User.findOne({
        $or: [ { email} ]
    })
    if(existingUsername){
        throw new ApiError(409,"Username Already Exists")
    }
    else if(existingEmail){
        throw new ApiError(409,"EmailId already exists");
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if(!avatarLocalPath){
        throw new ApiError(409,"Avatar file is required")
    }


})


export {registerUser}


// no export default so it can be imoorted like this
