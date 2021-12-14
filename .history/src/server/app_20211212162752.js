const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const app = express();
// var url = 'mongodb://localhost:27017/myTest';

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
    console.log(req)
    // res.send('登陆成功');
  })

app.listen(3000, (err) => {
  if (err) {
    throw err;
  }
  console.log('server listen 3000');
});
