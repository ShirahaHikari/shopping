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
  password: String,
})
const UserInfo = mongoose.model('userInfo', userSchema)
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.post('/loginUser', async (req, res) => {
  const userInfo = new UserInfo({
    name: req.body.username,
    password: req.body.password
  })
  userInfo.save(function (err) {
    if (err) {
      res.end('Error')
      return next();
    }
    res.send('success to login')
  })
})

app.listen(3000, (err) => {
  if (err) {
    throw err;
  }
  console.log('server listen 3000');
});
