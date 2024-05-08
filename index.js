const express = require ('express');
const core = require('cors')
const apiRouter = require('./routers/apiRouter.js')
const ConnectDb = require ('./db/ConnectDb.js');
require('dotenv').config();


const PORT = process.env.PORT || 3000;
const server= express();
server.use(core())
server.use(express.json())
server.use(express.urlencoded({extended:false}))
server.use(express.static("public"))
server.get('/' ,(req,res)=>{ 
    res.send("server is ready")
}
);

server.use('/api',apiRouter)



server.listen(PORT, async ()=>{
   await ConnectDb();
})
