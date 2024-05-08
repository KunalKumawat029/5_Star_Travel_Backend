const express = require('express')
const router = express.Router()
const {registerAdmin,loginAdmin} = require('../controller/adminController')
const v1=require('./v1')

router.post("/admin/register",registerAdmin)
router.post("/admin/login",loginAdmin)
router.use("/v1",v1)
 

module.exports = router;