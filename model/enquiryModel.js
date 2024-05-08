const {Schema, model } = require('mongoose')

const schema = new Schema({
    enq_per_name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    number:{
        type: Number,
        required: true
    },
    date:{
        type: String,
        required: true 
    },
    package_name:{
        type:String,
        required: true
    },
    special_req:{
        type: String
    }
},{timestamps:true})

const enquirymModel = model("Enquiry",schema)

module.exports = enquirymModel;