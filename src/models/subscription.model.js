import {mongoose} from 'mongoose'
import { Schema } from 'mongoose'

const subscriptionSchema = new Schema({
    subscriber:{
        type:Schema.Types.ObjectId,  //the person who is subscribing
        ref:"User"
    },
    channel:{
        type:Schema.Types.ObjectId,
        ref:"User"   //a user can upload videos and just watch videos both the fuctionality
    }
},{timestamps:true});






export const Subscription = mongoose.model("Subscription",subscriptionSchema)
