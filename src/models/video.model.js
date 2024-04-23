import moongose from "mongoose"
import { Schema } from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const videoSchema = new Schema({
    videoFile:{
        type:String, //cloudnary url
        required:true,
    },
    thumbnail:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    duration:{
        type:Number, //this will also come from cloudnary 
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean, // this is to show do we want to publicily put this video or not
        default:true 
    },
    owner:{
        tyep:Schema.Types.ObjectId,
        ref:"User"
    },




},{timestamps:true}) //created at update at set

videoSchema.plugin(mongooseAggregatePaginate)


export const Video = mongoose.model("Video",videoSchema)