const express=require("express")
const bloodModel=require("../model/bloodModel")

const router=express.Router()

router.post("/add",async(req,res)=>
{
    let data=req.body
    let blood=new bloodModel(data)
    let result=await blood.save()
    res.json(
        {
            status:"success"
        }
    )
})

router.get("/view",async(req,res)=>{
    let data=await bloodModel.find()
    res.json(data)
})

module.exports=router