const express = require('express');
const{addCategory,delCategory}= require('../controller/categoryController')
const {verifyToken}= require('../config/tokenManager')
const apiResponse = require('../ApiResponses/apiResponse');
const { get_all_Package, delPackage } = require('../controller/packageController');
const router = express.Router()
const package = require('../routers/package');
const { addEnquiry, get_all_Enquiry } = require('../controller/enquiryController');
const { addReview, get_all_Review } = require('../controller/reviewController');

router.use("/",async(req,res,next)=>{
    let response = await verifyToken(req)
    if(response.status){
        // if(res.data.role === 'admin'){
        //     next()
        // }
        // else{
        //     res.json(new apiResponse(false,null,"This is Admin Pannel you can't access this pannel"))
        // }
        next();
    }
    else {
        res.json(new apiResponse(false, null, response.msg))
    }
})

router.post("/addcategory",addCategory)
router.delete("/deletecategory/:id",delCategory)
router.use("/package",package)
router.get("/get_all_packages",get_all_Package)
router.delete("/deletepackage",delPackage)
router.post("/addenquiry",addEnquiry)
router.get("/get_all_enquiry",get_all_Enquiry)
router.post("/addreview",addReview)
router.get("/get_all_review",get_all_Review)
module.exports = router;
