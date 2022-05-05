const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
var bodyParser = require('body-parser')
const app = express();
var url = 'mongodb://localhost:27017/admin';
var ObjectId = require('mongodb').ObjectId
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
const managerSchema = new mongoose.Schema({
  name: String,
  password: String,
})
const dataSchema = new mongoose.Schema({
  name: String,
  item: String,
  price: Number,
  count: Number,
  priceSum: Number,
  img: String,
  type: String,
})
const adviseSchema = new mongoose.Schema({
  name: String,
  advise: String,
  date: String,
})
const userBuyRecord = new mongoose.Schema({
  name: String,
  item: String,
  price: Number,
  count: Number,
  priceSum: Number,
  img: String,
  date: String,
  received: Boolean,
  type: String,
})
const userBuyType = new mongoose.Schema({
  name: String,
  type: String,
  count: Number,
})
const UserBuyType = mongoose.model('userBuyType',userBuyType)
const UserShop = mongoose.model('userShop', dataSchema)
const UserInfo = mongoose.model('userInfo', userSchema)
const User = mongoose.model('user',useSchema)
const UserAdvise = mongoose.model('userAdvise',adviseSchema)
const UserBuyRecord = mongoose.model('userBuyRecord',userBuyRecord)
const ManagerInfo = mongoose.model('managerInfo',managerSchema)
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
app.post('/changePassword', async (req, res) => {
  UserInfo.updateOne({name:req.body.username},{$set:{'password':req.body.password}})
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
app.post('/addUserInfo',async(req,res)=>{
  const userInfo = new UserInfo({
      name:req.body.name,
      password:req.body.password,
      telephone:req.body.telephone,
  })
  userInfo.save(function (err) {
    if (err) {
      res.send('Error')
      return
    }
    res.send('success')
  })
})
app.post('/findRegisterSame',async(req,res)=>{
  UserInfo.findOne({name:req.body.username}).then(result=>{
    if(result!==null){
      res.send('same')
      return;
    }
    res.send('not found')
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
app.post('/findUserSame', async (req, res) => {
  // console.log(req.body)
  UserInfo.findOne({name:req.body.name}).then(result=>{
    if(result!==null){
      res.send('same')
      return;
    }
    res.send('not found')
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
    // console.log(result)
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
  UserShop.find({name:req.body.name}).then(result=>{
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
  let id = req.body.id
  UserShop.deleteMany({_id:ObjectId(id)}).then(result=>{
    // console.log(result)
    if(result==null){
      res.send('failed')
      return
    }
    res.send('success')
  })
})
app.post('/addUserBuyType',async(req,res)=>{
  UserBuyType.findOne({name:req.body.name,type:req.body.type}).then(result=>{
    if(result === null){
      let userBuyType = new UserBuyType({
        name:req.body.name,
        type:req.body.type,
        count:1,
      })
      userBuyType.save(function(err){
        if(err){
          res.send('err')
          return;
        }
        res.send('success')
      })
    }else{
      UserBuyType.updateOne({name:req.body.name,type:req.body.type},{$set:{'count':result.count+1}}).then(result=>{
        if(result==null){
          res.send('err')
        }
        res.send('success')
      })
    }
  })
})
app.post('/getUserBuyType',async(req,res)=>{
  UserBuyType.find({name:req.body.name}).then(result=>{
    if(result == null){
      res.send('err')
      return
    }
    res.send([result])
  })
})
app.get('/getUserBuyType',async(req,res)=>{
  UserBuyType.find().then(result=>{
    if(result == null){
      res.send('err')
      return
    }
    res.send([result])
  })
})
app.post('/findUserShop', async (req, res) => {
  let id = req.body.id
  UserShop.findOne({_id:ObjectId(id)}).then(result=>{
    // console.log(result)
    if(result==null){
      res.send('failed')
      return
    }
    res.send(result)
  })
})
app.get('/getUserAdvise', async (req, res) => {
  UserAdvise.find().then(result=>{
    // console.log(result)
    if(result==null){
      res.send('failed')
      return
    }
    res.send([result])
  })
})
app.post('/addUserAdvise', async (req, res) => {
  const userAdvise = new UserAdvise({
    name: req.body.name,
    advise: req.body.advise,
    date: req.body.date,
  })
  userAdvise.save(function (err) {
    if (err) {
      res.send('Error')
      return
    }
    res.send('success')
  })
})
app.post('/deleteUserAdvise', async (req, res) => {
  let id = req.body.id
  UserAdvise.deleteMany({_id:ObjectId(id)}).then(result=>{
    // console.log(result)
    if(result==null){
      res.send('failed')
      return
    }
    res.send('success')
  })
})
app.post('/getUserBuyRecord', async (req, res) => {
  UserBuyRecord.find({name:req.body.name}).then(result=>{
    // console.log(result)
    if(result==null){
      res.send('failed')
      return
    }
    res.send([result])
  })
})
app.get('/getUserBuyRecord', async (req, res) => {
  UserBuyRecord.find().then(result=>{
    // console.log(result)
    if(result==null){
      res.send('failed')
      return
    }
    res.send([result])
  })
})
app.post('/deleteUserBuyRecord', async (req, res) => {
  let id = req.body.id
  UserBuyRecord.deleteOne({_id:ObjectId(id)}).then(result=>{
    // console.log(result)
    if(result==null){
      res.send('failed')
      return
    }
    res.send('success')
  })
})
app.post('/addUserBuyRecord', async (req, res) => {
  const userBuyRecord = new UserBuyRecord({
    name: req.body.name,
    item: req.body.item,
    price:req.body.price,
    priceSum:req.body.priceSum,
    count: req.body.count,
    img:req.body.img,
    date:req.body.date,
    type:req.body.type,
    received:req.body.received,
  })
  userBuyRecord.save(function (err) {
    if (err) {
      res.send('Error')
      return
    }
    res.send('success')
  })
})
app.post('/getUserReceived', async (req, res) => {
  UserBuyRecord.find({name:req.body.name}).then(result=>{
    // console.log(result)
    if(result==null){
      res.send('failed')
      return
    }
    res.send([result])
  })
})
app.post('/updateUserReceived', async (req, res) => {
  let id = req.body.id
  UserBuyRecord.updateOne({_id:ObjectId(id)},{$set:{'received':true}}).then(result=>{
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
    type:req.body.type,
  })
  userShop.save(function (err) {
    if (err) {
      res.send('Error')
      return
    }
    res.send('success')
  })
})
app.post('/getManagerInfo',async(req,res)=>{
  ManagerInfo.find({name:req.body.name,password:req.body.password}).then((result)=>{
    if(result == null){
      res.send('err')
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
