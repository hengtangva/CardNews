
let mongoose = require('mongoose')
let request = require('request')
let User = require('./data_model/user_model.js')  //用户数据的设计模式
let News = require('./data_model/news_model')     //新闻数据模式

// express 提供了封装路由的方式
let express = require('express')

// 1，创建路由容器
let router = express.Router()

//处理首页的新闻展示
router.get('/tips', (req, res) => {
  console.log("get request");
 // res.end('3333')
  mongoose.connect('mongodb://localhost/news', {useNewUrlParser: true, useUnifiedTopology: true})
  News.find((err,ret) => {
    if(err){
      console.log('find err');
    }
    else {
      let oneNews = JSON.stringify(ret[4])
      console.log(ret[4]);
      console.log(oneNews);
      res.end(oneNews)//选一条数据，在首页进行展示
    }
  })
})

//处理注册
router.post('/register',(req,res) => {
  let user = req.body
  console.log(user);
  //链接数据库
  mongoose.connect('mongodb://localhost/user', {useNewUrlParser: true, useUnifiedTopology: true})
  User.find((err, ret) => {
    if(err) {
      console.log('find err');
    }
    else {
      //进行比对，是否已经有该用户
      //console.log(ret);
      for(let i = 0; i < ret.length; i++) {
        //console.log(ret[i]);
        if(ret[i].username === user.username) {
          res.end('err')
          return
        }
      }
      //没有就插入该信息
      let admin = new User({
        username: user.username,
        password: user.password,
        email: user.email
      })
     // console.log(admin);
      admin.save((err, ret) => {
        if(err) {
          console.log('保存失败');
        } else {
          console.log('保存成功');
          console.log(ret);
        }
      })
      res.end('ok')
    }
  })
})

//处理登录
router.post('/login',(req, res) => {
  console.log(req.body);
  let user = req.body;
  mongoose.connect(
      'mongodb://localhost/user',
      {useNewUrlParser: true, useUnifiedTopology: true
      })
  let flag =
  User.find((err, ret) => {
    if(err) {
      console.log('find err');
    }
    else {
      //进行比对，是否已经有该用户

      for(let i = 0; i < ret.length; i++) {
        if(ret[i].username === user.name && ret[i].password === user.pass) {
          console.log('ok');
          res.end('0') //有且账户密正确就返回 0
          return
        }
        if(ret[i].username === user.name && ret[i].password !== user.pass) {
          console.log('密码不正确');
          res.end('1') //有且账户但密码不正确就返回 1
        }
      }
      //没有就返回 2
      console.log('账号不存在');
      res.end('2')

    }
  })
})

//处理获取新闻的请求
router.get('/news',(req, res) => {

  request("http://v.juhe.cn/toutiao/index?type=&key=da50f3fa460cd818e7c93556c005b454", (err,ret) => {
    console.log('start');
    let content = JSON.parse(ret.body);
    let datas = content.result.data;
    res.end(JSON.stringify(datas))
  })
  //这里是从数据库获取数据
/*  mongoose.connect('mongodb://localhost/news', {useNewUrlParser: true, useUnifiedTopology: true})
  News.find((err,ret) => {
    if(err){
      console.log('find err');
    }
    else {
      let newslist = JSON.stringify(ret)
      console.log(newslist);
      res.end(newslist)//选一条数据，在首页进行展示
    }
  })*/
})
// 3, 导出路由容器
module.exports = router

