const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;

const ConnectDb = async ()=>{
    try {
        let res = await mongoose.connect(MONGO_URI)
        console.log(`\n MongoDB connected !! DB HOST: ${res.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error",error);
        process.exit(1)
    }
}



module.exports = ConnectDb;