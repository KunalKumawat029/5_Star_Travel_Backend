const {Schema,model} = require('mongoose')

const schema = new Schema({
    cate_name:{
        type: String,
        required: [true, "Required !!"],
        unique: true
    },
    isDeleted:{
        type: Boolean,
        default: false
    },
    last_modify:{
        type: Schema.Types.ObjectId,
        ref: 'Admin',
        required: [true, "Required !!"]
    }
})

const categoryModel = model('Category',schema)

module.exports = categoryModel;