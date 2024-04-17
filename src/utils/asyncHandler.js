// //here asyncHandler is a higer order function which basically takes a function as
// //a parameter and the format to write a higher order fucntion is as follows
// // const asyncHandler = (fucntion_) => () => {}
// //Here next refers to the middleware that we would wanna use

//*** Method 1 using try catch the code below is for try catch */
/** This is one type of code you could see the other ine could be based on promises */


// const asyncHandler = (function_) => async(req,res,next) => {
//     try{
//         await function_(req,res,next);


//     }
//     catch(error){
//         res.status(error.code || 500).json({
//             success:false, //this makes it easier for the frontend people to read the code
//             message:err.message 
//         })

//     }


// }

// export {asyncHandler}





