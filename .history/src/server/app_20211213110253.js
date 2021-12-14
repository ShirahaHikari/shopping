const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const app = express();
var url = 'mongodb://localhost:27017/myTest';

mongoose.connect(url,{useNewUrlParser:true}).then(()=>console.log('数据库连接成功'))
.catch(err=> console.log(err,'数据库连接失败'));

const courseSchema = new mongoose.Schema({
  name: String,
  code: String,
})
const Course = mongoose.model('Course',courseSchema)
const course = new Course({
  name: '111',
  code: '123',
})
app
  .route('/loginUser')
  .post(function (req, res) {
    res.set({
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Max-Age': 1728000,
      'Access-Control-Allow-Origin': req.headers.origin || '*',
      'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
    //   'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
      'Content-Type': 'application/json; charset=utf-8',
    });
    course.save();
    res.send('登陆成功');
  })

app.listen(3000, (err) => {
  if (err) {
    throw err;
  }
  console.log('server listen 3000');
});
