const apiResponse = require('../ApiResponses/apiResponse')
const enquirymModel = require('../model/enquiryModel')

async function addEnquiry(req,res){
    const {enq_per_name,email,number,date,package_name,special_req}=req.body
    try {
        let resData= await enquirymModel.create({enq_per_name,email,number,date,package_name,special_req})
        if(!resData){
            res.json(new apiResponse(false,null,"Enquiry is not added..."))
           }
           else{
            res.json(new apiResponse(true,resData,"successfully..."))
           }
    } catch (error) {
        res.json(new apiResponse(false,null,error.message+"Enquiry related catch error..."))
    }
}

async function get_all_Enquiry(req,res){
    try {
        const data = await enquirymModel.find()
        if(!data){
            res.json(new apiResponse(false,null,"Failed to load..."))
        }
        else{
            res.json(new apiResponse(true,data,"Success..."))
        }
    } catch (error) {
        res.json(new apiResponse(false,null,error.message))
    }
}


module.exports = {addEnquiry,get_all_Enquiry}