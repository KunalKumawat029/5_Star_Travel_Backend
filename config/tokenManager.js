const jwtToken = require('jsonwebtoken')
require('dotenv').config()
const SECREAT = process.env.SECREAT

class JWT {
    generateToken(data){
        let Token = jwtToken.sign(data,SECREAT,{expiresIn: "1d"})
        return Token;
    }

    verifyToken(req){
        return new Promise((resolve,reject)=>{
           let authHeader = req.headers['authorization']
           let token = authHeader && authHeader.split(' ')[1]
           if(token == null){
             resolve({status:false,msg:"This is a private api so you have enter token in this api"})
           }else{
             jwtToken.verify(token,SECREAT,(err,data)=>{
                if(err){
                 resolve({status:false,msg:"Invalid or Expire token !"})
                }else{
                  req.data = data
                  resolve({status:true,msg:"token verified!"})
                }
             })
           }
   
        })
       }
}

module.exports = new JWT