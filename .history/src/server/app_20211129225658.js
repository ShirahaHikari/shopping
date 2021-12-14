const { response } = require('@umijs/deps/compiled/express')
const express = require('express')
const app = express()

app.get('/loginServer',function(req,res){
    response.setHeader('content-Type','text/html;charset=utf-8')
    response.send('ok')
})

app.listen(3000,function(err){
    if(err){
        console.log('服务器启动失败')
    }else{
        console.log('服务器请求成功')
    }
    
})