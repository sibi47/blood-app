const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const bloodRouter=require("./controller/bloodRouter")
const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://sibibab02:siba2002@cluster0.3wbq8id.mongodb.net/bloodDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})

app.use("/api/blood",bloodRouter)

app.listen(3001,()=>{
    console.log("server running")
})