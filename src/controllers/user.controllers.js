import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async(req,res)=>{
    res.status(200).json({
        message:"Ok"
    })
})


export {registerUser}


// no export default so it can be imoorted like this
