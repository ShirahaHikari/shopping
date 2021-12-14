const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const app = express();
var url = 'mongodb://localhost:27017/admin';

mongoose.connect(url, {
    useNewUrlParser: true
  }).then(() => console.log('数据库连接成功'))
  .catch(err => console.log(err, '数据库连接失败'));

const userSchema = new mongoose.Schema({
  name: String,
  code: String,
})
const UserInfo = mongoose.model('userInfo', userSchema)
var uE = (bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
})
app.post('/loginUser', uE, function (req, res) {
  var username = req.body.username
  var password = req.body.password
  console.log(req.body)
  const userInfo = new UserInfo({
    name: username,
    code: password
  })
  userInfo.save(function (err) {
    if (err) {
      res.end('Error')
      return next();
    }
  })
})
// app
//   .route('/loginUser')
//   .post(function (req, res) {
//     res.set({
//       'Access-Control-Allow-Credentials': true,
//       'Access-Control-Max-Age': 1728000,
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
//     //   'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
//       'Content-Type': 'application/json; charset=utf-8',
//     });
//     console.log(Object(req.body))
//     const obj = Object(req.body)
//     console.log(obj.username)
//     const userInfo = new UserInfo({
//       name: '1',
//       code: '1'
//     })
//     userInfo.save(function(err){
//       if(err){
//         res.end('Error')
//         return next();
//       }
//       // res.send('登陆成功');
//     })
//     // res.send('登陆成功');
//   })

app.listen(3000, (err) => {
  if (err) {
    throw err;
  }
  console.log('server listen 3000');
});
