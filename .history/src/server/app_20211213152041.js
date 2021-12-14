const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const cors = require('cors')
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
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.post('/loginUser', async (req, res) => {
  const userInfo = new UserInfo({
    // name: req.body.username,
    // code: req.body.password
    name:"1"
  })
  console.log(req.body)
  userInfo.save(function (err) {
    if (err) {
      res.end('Error')
      return next();
    }
    res.send('success')
  })
})
// app
//   .route('/loginUser')
//   .post(function (req, res, next) {
//     res.header('Access-Control-Allow-Credentials', true)
//     res.header('Access-Control-Max-Age', 1728000)
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')
//     res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
//     res.header('Content-Type', 'application/json; charset=UTF-8')
//     console.log(req.body)
//     const userInfo = new UserInfo({
//       name: req.body.username,
//       code: req.body.password
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
