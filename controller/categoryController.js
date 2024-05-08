const categoryModel = require('../model/categoryModel');
const apiResponse = require('../ApiResponses/apiResponse');

async function addCategory(req,res){
    const{cate_name}=req.body
    try {
        if(!cate_name){
            res.json(new apiResponse(false,null,"Please Enter Category Name..."))
        }
        else{
            cateData = await categoryModel.create({cate_name,last_modify:req.data.id})
            if(cate_name !==null){
                res.json(new apiResponse(true,cateData,"Category Added Successfully..."))
            }
        }
    } catch (error) {
        res.json(new apiResponse(false,null,"error.message"))
    }
}
async function delCategory(req,res){
    const {id} = req.params
    try{
        let isDel = await categoryModel.findByIdAndUpdate(id,{isDeleted:true})
        if(isDel !== null){
           res.json(new apiResponse(true,null,"category deleted successfully"))
        }
    }catch(err){
       res.json(new apiResponse(false,null,err.message))
    }
}

module.exports = {addCategory,delCategory}