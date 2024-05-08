const apiResponse = require('../ApiResponses/apiResponse')
const reviewModel = require('../model/reviewModel')

async function addReview(req,res){
    const {review_by,person_from,review}=req.body
    try {
        let resData= await reviewModel.create({review_by,person_from,review,adder: req.data.id})
        if(!resData){
            res.json(new apiResponse(false,null,"Review is not added..."))
           }
           else{
            res.json(new apiResponse(true,resData,"successfully..."))
           }
    } catch (error) {
        res.json(new apiResponse(false,null,error.message+"Review related catch error..."))
    }
}

async function get_all_Review(req,res){
    try {
        const data = await reviewModel.find()
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


module.exports = {addReview,get_all_Review}