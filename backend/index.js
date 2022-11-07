
const express=require("express")
require("dotenv").config()
const {connection, StudentModel} = require("./db")
const app=express();

const PORT=process.env.PORT || 8080
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Home page")
})
app.get("/details", async (req, res) => {
    const results = await StudentModel.find()
    res.send(results)
})
app.post("/addDetails", async (req, res) => {
    const data = req.body;
    const student = new StudentModel(data)
    await student.save()
    res.send(student)
})

app.patch("/edit/:id",async(req,res)=>{
    const id=req.params.id;
    const update=await StudentModel.findOne({_id:id})
    const newData=await StudentModel.findByIdAndUpdate(id,req.body)
    return res.send(newData)
})
app.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id;
    const update=await StudentModel.findOne({_id:id})
    const newData=await StudentModel.findByIdAndDelete(id,req.body)
     res.send("deleted")
})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})