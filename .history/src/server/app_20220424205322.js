const express = require('express');
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
  priceSum: Number,
  img: String,
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
app.post('/userInfo', async (req, res) => {
  UserInfo.find({}).then(result=>{
    if(result !== null){
      res.send([result])
      console.log([result])
      return
    }
    res.send('failed')
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
app.get('/getUserShop', async (req, res) => {
  // console.log(req.body)
  UserShop.find().then(result=>{
    // console.log(result)
    if(result==null){
      res.send('failed')
      return
    }
    console.log([result])
    res.send([result])
  })
})
app.post('/getUserShop', async (req, res) => {
  // console.log(req.body)
  UserShop.find({name:req.body.userName}).then(result=>{
    // console.log(result)
    if(result==null){
      res.send('failed')
      return
    }
    console.log([result])
    res.send([result])
  })
})
app.post('/deleteUserShop', async (req, res) => {
  // console.log(req.body)
  UserShop.remove({id:req.body.id}).then(result=>{
    // console.log(result)
    if(result==null){
      res.send('failed')
      return
    }
    res.send('success')
  })
})
app.post('/addShop', async (req, res) => {
  // console.log(req.body)
  const userShop = new UserShop({
    name: req.body.userName,
    item: req.body.item,
    price:req.body.price,
    priceSum:req.body.priceSum,
    count: req.body.count,
    img:req.body.img,
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
