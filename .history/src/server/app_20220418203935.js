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
  telephone: String,
})
const useSchema = new mongoose.Schema({
  name: String,
})
const dataSchema = new mongoose.Schema({
  name: String,
  item: String,
  price: Number,
  count: Number,
})
const UserShop = mongoose.model('userShop', dataSchema)
const UserInfo = mongoose.model('userInfo', userSchema)
const User = mongoose.model('user',useSchema)
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.post('/loginUser', async (req, res) => {
  UserInfo.findOne({name:req.body.username,password:req.body.password})
  .then(result=>{
    if(result === null){
      res.send('failed')
      return
    }
    res.send('success')
  })
})
app.post('/registerUser', async (req, res) => {
  // console.log(req.body)
  const userInfo = new UserInfo({
    name: req.body.username,
    password: req.body.password,
    telephone: req.body.telephone,
  })
  userInfo.save(function (err) {
    if (err) {
      res.send('Error')
      return
    }
    res.send('success')
  })
})
app.post('/user', async (req, res) => {
  // console.log(req.body)
  const userInfo = new User({
    name: req.body.username,
  })
  User.deleteMany({},function(err,doc){
    if(err){
      console.log(err)
    }else{
      console.log(doc)
    }
  })
  userInfo.save(function (err) {
    if (err) {
      res.send('Error')
      return
    }
    res.send('success')
  })
})
app.get('/user', async (req, res) => {
  // console.log(req.body)
  User.find().then(result=>{
    console.log(result)
    if(result==null){
      res.send('failed')
      return
    }
    res.send('success')
  })
})
app.post('/getUserShop', async (req, res) => {
  // console.log(req.body)
  console.log(req.userName)
  UserShop.find({name:req.userName}).then(result=>{
    // console.log(result)
    if(result==null){
      res.send('failed')
      return
    }
    // console.log(result)
    res.send(result)
  })
})
app.post('/addShop', async (req, res) => {
  // console.log(req.body)
  const userShop = new UserShop({
    name: req.body.userName,
    item: req.body.item,
    price:req.body.price,
    count: req.body.count,
  })
  userShop.save(function (err) {
    if (err) {
      res.send('Error')
      return
    }
    res.send('success')
  })
})
app.listen(3000, (err) => {
  if (err) {
    throw err;
  }
  console.log('server listen 3000');
});
