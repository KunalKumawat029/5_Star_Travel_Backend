const packagesModel = require('../model/packagesModel')
const apiResponse = require("../ApiResponses/apiResponse");
const uploadOnCloudinary = require('../utils/cloudinary');


async function addPackage(req,res){
    const {package_name,price,package_for,package_validity,category,description,discountPercentage}=req.body
    try {   
        const imageLocalPath = req.files?.images[0]?.path;
        if(!imageLocalPath){
            return res.json(new apiResponse(false,null,"Image is require..."))
        }
       const image = await uploadOnCloudinary(imageLocalPath)
       if(!image){
        return res.json(new apiResponse(false,null,"image is require..."))
    }
       let resppsData = await packagesModel.create({package_name,price,package_for,package_validity,images:image.url,category,description,discountPercentage,adder: req.data.id })
       if(!resppsData){
        res.json(new apiResponse(false,null,"Package is not added..."))
       }
       else{
        res.json(new apiResponse(true,resppsData,"Package added successfully..."))
       }
    } catch (error) {
        res.json(new apiResponse(false,null,error.message))
    }
}

async function get_all_Package(req,res){
    try {
        const data = await packagesModel.find().populate(['category'])
        if(!data){
            res.json(new apiResponse(false,null,"Failed to load packages"))
        }
        else{
            res.json(new apiResponse(true,data,"Success..."))
        }
    } catch (error) {
        res.json(new apiResponse(false,null,error.message))
    }
}

async function delPackage(req,res){
    const {id}=req.params
    try {
        let isDel = await packagesModel.findByIdAndUpdate(id,{isDeleted:true})
        if(isDel !== null){
            res.json(new apiResponse(true,null,"Package deleted successfully..."))
        }
    } catch (error) {
        res.json(new apiResponse(false,null,error.message))
    }
}

module.exports = {addPackage,get_all_Package,delPackage}