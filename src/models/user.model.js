import { Mongoose } from "mongoose";
import { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

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

userSchema.pre("Save",async function(next){
    if(!this.isModified("password")) return next();
    //because this process would take time hence we put the await keyword
    this.password = await bcrypt.hash(this.password,10)
    next();
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.method.generateAccessToken = function(){
    return jwt.sign({
        _id:this._id,   // this is basically the payload, everything we can access using database query
        email:this.email,
        username:this.username,
        fullname:this.fullname
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
)

}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign({
        _id:this._id

    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
)
    
}
export const User = mongoose.model("User",userSchema)