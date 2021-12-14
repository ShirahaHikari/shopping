const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const app = express();
var url = 'mongodb://localhost:27017/admin';

mongoose.connect(url,{useNewUrlParser:true}).then(()=>console.log('数据库连接成功'))
.catch(err=> console.log(err,'数据库连接失败'));

const userSchema = new mongoose.Schema({
  name: String,
  code: String,
})
const UserInfo = mongoose.model('userInfo',userSchema)
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app
  .route('/loginUser')
  .post(function (req, res, next) {
    res.set({
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Max-Age': 1728000,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
      'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
      // 'Content-Type': 'application/json; charset=utf-8',
    });
    console.log(req.body)
    const userInfo = new UserInfo({
      name: req.body.username,
      code: req.body.password
    })
    userInfo.save(function(err){
      if(err){
        res.end('Error')
        return next();
      }
      // res.send('登陆成功');
    })
    // res.send('登陆成功');
  })

app.listen(3000, (err) => {
  if (err) {
    throw err;
  }
  console.log('server listen 3000');
});
