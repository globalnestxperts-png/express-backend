const express = require("express");
const ConnectDb = require("./config/db");
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const PORT=process.env.PORT||5000;
ConnectDb();
app.get( "/",(rq,res)=>{
    res.send("hello world")
})
app.listen(PORT,()=>{
    console.log(`Server is runing on port ${PORT}`)
})


