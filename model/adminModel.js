const {Schema,model} = require('mongoose')

const schema = new Schema({
    useName:{
        type:String,
        required:true
    },
    mobile : {
        type : Number,
        required : true,
        unique : [true,"mobile number is already exists"]
    },
    email: {
        type : String,
        required : true,
        unique: [true,"email id  is already exists"]
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        default:"admin"
    },
    isActive : {
        type : Boolean,
        default : true
    },
},{timestamps:true})

const adminModel = model("Admin",schema)

module.exports = adminModel;