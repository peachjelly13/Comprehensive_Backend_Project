import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const registerUser = asyncHandler(async(req,res)=>{
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
    const existingUsername = await User.findOne({
        $or : [ { username }]
    })
    const existingEmail = await User.findOne({
        $or: [ { email} ]
    })
    if(existingUsername){
        throw new ApiError(409,"Username Already Exists")
    }
    else if(existingEmail){
        throw new ApiError(409,"EmailId already exists");
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath =  req.files?.coverImage[0]?.path;

    if(!avatarLocalPath){
        throw new ApiError(409,"Avatar file is required")
    }
    //servers take time 

    const avatar = await uploadOnCloudinary(avatarLocalPath); // we do not have to go ahead until and unless this is completed
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if(!avatar){
        throw new ApiError(409,"Avatar file is required")
    }

    const user = await User.create({
        fullname,
        avatar: avatar.url,
        //we need to check if or not coverimage is present or no 
        //if coverImage there then put the url else keep it empty
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500,"something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200,createdUser,"User Registered Successfully")
    )//everything went alright



})


export {registerUser}


// no export default so it can be imoorted like this
