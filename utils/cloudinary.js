const cloudinary = require('cloudinary')
const fs = require('fs')         
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECREAT 
});

const uploadOnCloudinary = async (localFilePath) =>{
    try {
        if(!localFilePath){
            return null
        }
        //upload the file on cloudinary...
        const response = await cloudinary.uploader.upload
        (localFilePath,{
            resource_type:"auto"
        });
        //file has been uploaded successfully...
        console.log("file is upload in cloudinary...",
            response.url
        );
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath)
        //remove the loacally saved temporary file as the upload operation got failed
        return null;
    }
}

module.exports = uploadOnCloudinary;