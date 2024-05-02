import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async(req,res)=>{
    res.status(200).json({
        message:"Ok"
    })

    const {email,fullname,password,username} = req.body;
    console.log("email: ",email); // testing to be done using postman 
})


export {registerUser}


// no export default so it can be imoorted like this
