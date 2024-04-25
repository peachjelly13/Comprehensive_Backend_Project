import {v2 as cloudinary} from 'cloudinary';  //basically giving a custom name to v2
import fs from "fs"
              
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) =>{
    try{
        if(!localFilePath) return null   //you do not know what do you want to do
        //now we are uploading the file on cloudinary
        cloudinary.uploader.upload() //give the name of your local file here
 
    }
    catch(error){

    }

}

cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });