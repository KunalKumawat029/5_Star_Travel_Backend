const ApiResponse = require('../ApiResponses/apiResponse');
const {generateToken} = require('../config/tokenManager')
const adminModel = require('../model/adminModel');
const {encrypt,verify} = require('../utils/passwordMananger');
require('dotenv').config
const saltRound = parseInt(process.env.SALT_ROUND || 10)

async function registerAdmin(req,res){
    const {useName,email,mobile,password}= req.body
    let hashPassword;
    try {
        if(!useName || !email || !mobile || !password){
            res.json(new ApiResponse(false,null,"all fileds are require..."))
            return false 
        }
        hashPassword = await encrypt({ pass : req.body.password, saltRound})
        let data = await adminModel.create({useName,email,mobile,password: hashPassword})

        if(data !==  null){
            let Obj = data.toObject()
            delete Object.password
            delete Obj.__v

            res.json(new ApiResponse(true,Obj,"register successfully"))
        }
    } catch (error) {
        res.json(new ApiResponse(false, null, error.message))
    }
}

async function loginAdmin(req,res){
    const {email,password }= req.body
    try {
        if(!email){
            res.json(new ApiResponse(false,null, "Please Enter the email..."))
        }
        if(!password){
            res.json(new ApiResponse(false,null, "Please Enter the password..."))
        }

        let user = await adminModel.findOne({email})
        if(!user)
        {
            res.json(new ApiResponse(false,null,"Admin not found"))
        }

        let isMatch = await verify({password, hash: user.password})
        if(!isMatch){
            res.json(new ApiResponse(false,null,"password is incorrect..."))
        }

        let obj = user.toObject()
        delete obj.password
        delete obj.__v
        let token = generateToken({ id: obj._id, name: obj.useName })
        obj.token = token
        res.json(new ApiResponse(true,obj,"Admin Login Successfully "))
    } catch (error) {
        res.json(new ApiResponse(false,null,error.message))
    }

}

module.exports = {registerAdmin,loginAdmin}