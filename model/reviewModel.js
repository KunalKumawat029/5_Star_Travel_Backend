const {Schema, model} = require('mongoose')

const schema = new Schema({
    review_by:{
        type:String,
        required:true
    },
    person_from:{
        type:String,
        required:true
    },
    review:{
        type: String,
        required: true
    },
    // images : {
    //     type : Array,
    // }
},{timestamps: true})

const reviewModel = model("Review",schema)

module.exports = reviewModel;