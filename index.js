const express = require("express")
const app = express()

app.get( "/",(rq,res)=>{
    res.send("hello express")
})






app.listen(3000)

