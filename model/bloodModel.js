const mongoose=require("mongoose")

const bloodSchema=new mongoose.Schema(
    {
        name:String,
        bloodGroup:String,
        phoneNo:String,
        address:String,
        diseaseStatus:String
    }
)
module.exports=mongoose.model("blood",bloodSchema)