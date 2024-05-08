const {Schema , model} = require('mongoose')

const schema = new Schema({
    package_name:{
        type: String,
        required : true,
        unique : true
    },
    price:{
        type: Number,
        required: true
    },
    package_for:{
        type: String,
        required: true
    },
    package_validity:{
        type : String,
        required : true
    },
    adder : {
        type : Schema.Types.ObjectId,
        ref:'Admin'
    },
    images : {
        type : Array
    },
    category : {
        type : Schema.Types.ObjectId,
        required : true,
        ref:"Category"
    },
    description : {
        type : String,
    },
    isDeleted : {
        type : Boolean,
        default : false
    },
    discountPercentage : {
        type : String,
    },
},{timestamps:true})

const packagesModel = model("Package",schema)

module.exports = packagesModel;