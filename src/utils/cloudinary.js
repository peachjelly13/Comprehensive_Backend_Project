import {v2 as cloudinary} from 'cloudinary';  //basically giving a custom name to v2
import fs from "fs"     
import { response } from 'express';
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
const uploadOnCloudinary = async (localFilePath) =>{
    try{
        if(!localFilePath) return null   //you do not know what do you want to do
        //now we are uploading the file on cloudinary
        const respone = await cloudinary.uploader.upload(
          localFilePath,{
            resource_type:"auto"
          }
        ) //give the name of your local file here
        console.log("Cloudinary file has been uploaded successfully",response.url) 
        return response
    }
    catch(error){
      fs.unlinkSync(localFilePath) //remove the locally saved temp file as the upload function got failed
      return null;
    }
}

export {uploadOnCloudinary}
