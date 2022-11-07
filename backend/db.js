
const mongoose = require("mongoose")

//const connection = mongoose.connect("mongodb://127.0.0.1:27017/mern_crud")
const connection = mongoose.connect(`mongodb+srv://TabrezAlam98:talam955@cluster0.ox7b5cc.mongodb.net/mern_crud?retryWrites=true&w=majority`)

const studentSchema =  mongoose.Schema({
   name : String,
   age : Number,
   course : String,
})

const StudentModel = mongoose.model("users", studentSchema)


module.exports = {
   connection,
   StudentModel
}