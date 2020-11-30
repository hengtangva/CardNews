
let express =  require('express')
let fs = require('fs')
let bodyParser = require('body-parser')
let router = require('./router')

let app = express()



 //设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


app.use(bodyParser.urlencoded({ extend: false}))
app.use(bodyParser.json())

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

//router(app)
// ,把路由容器挂载到 app 服务中
app.use(router)

app.listen(3000, () => {
  console.log('http://127.0.0.1:3000');
})

module.exports = app