const express = require('express')
const app = express()

const fs = require('fs')

fs.readFile('./data.json','utf-8',(err,data)=>{
    if(!err){
        app.get('/',(req,res)=>{
            res.send(data)
        })
        app.get('/data',(req,res)=>{
            const count = parseInt(req.query.count)
            const ofset = parseInt(req.query.ofset)
            res.send(JSON.parse(data).slice(ofset,ofset+count))
        })
        app.get('/data/:id',(req,res)=>{
            console.log( JSON.parse(data))
            res.json(JSON.parse(data).find(item=>item.id == req.params.id))
        })
    }else{
        console.log('error happened')
    }

})

app.listen(3000,()=>{
    console.log('server is running')
})