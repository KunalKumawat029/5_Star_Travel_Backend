const express = require('express')
const {addPackage} = require("../controller/packageController")
const multer = require('multer')
const storage = require('../multer/multer')

const upload = multer({storage:storage})
const router = express.Router()

// router.post('/add',upload.any(),addPackage(req,res,next))
router.post('/add', upload.fields([{
    name:"images",
    minCount : 1
}]),addPackage);


module.exports = router;