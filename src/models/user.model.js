import { Mongoose } from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String, //basically a url from cloudnary
        required:true
    },
    coverImage:{
        type:String,
       
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String, //because password here is encrypted
        required:[true,'Passoword Is Required'] //you can send your custom messages
    },
    refreshToken:{
        type:String

    }





},{
    timestamps:true  //this will give you craeted at and updated at by default
})

export const User = mongoose.model("User",userSchema)