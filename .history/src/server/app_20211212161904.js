const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const app = express();
// var url = 'mongodb://localhost:27017/myTest';

app
  .route('/loginUser')
//   .get(function (req, res) {
//     res.set({
//       'Access-Control-Allow-Credentials': true,
//       'Access-Control-Max-Age': 1728000,
//       'Access-Control-Allow-Origin': req.headers.origin || '*',
//       'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
//       'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
//       'Content-Type': 'application/json; charset=utf-8',
//     });
//     res.send('get login data success');
//   })
  .put(function (req, res) {
    res.set({
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Max-Age': 1728000,
      'Access-Control-Allow-Origin': req.headers.origin || '*',
      'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
    //   'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
      'Content-Type': 'application/json; charset=utf-8',
    });
    res.send('注册成功');
  })
  .post(function (req, res) {
    res.set({
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Max-Age': 1728000,
      'Access-Control-Allow-Origin': req.headers.origin || '*',
      'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
    //   'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
      'Content-Type': 'application/json; charset=utf-8',
    });
    res.send('登陆成功');
  })
// app.use((req, res, next) => {
//   //设置请求头
//   res.set({
//     'Access-Control-Allow-Credentials': true,
//     'Access-Control-Max-Age': 1728000,
//     'Access-Control-Allow-Origin': req.headers.origin || '*',
//     'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
//     'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
//     'Content-Type': 'application/json; charset=utf-8',
//   });
//   req.method === 'OPTIONS' ? res.status(204).end() : next();
// });

app.listen(3000, (err) => {
  if (err) {
    throw err;
  }
  console.log('server listen 3000');
});
