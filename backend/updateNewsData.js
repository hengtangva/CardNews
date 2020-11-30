
const request = require('request');

let mongoose = require('mongoose')

let Schema = mongoose.Schema
// 1，连接数据库

mongoose.connect('mongodb://localhost/news', {useNewUrlParser: true, useUnifiedTopology: true})


const newsSchema = new Schema({
  title: {
    type: String,
  },
  date: {
    type: String
  },
  category: {
    type: String
  },
  author_name: {
    type: String
  },
  url: {
    type: String
  },
  pict1:{
    type: String
  },
  pict2:{
    type: String
  },
  pict3: {
    type: String
  }
})

let News =  mongoose.model('News', newsSchema);   //新闻数据模式

//查询所有， 返回的是数组
News.find((err, ret) => {
  if(err) {
    console.log('find err');
  }
  else {
    console.log(ret[0]);
    console.log(typeof (ret));
    console.log(typeof (ret[0]));
    console.log(ret[0].data);
  }
})
// request("http://v.juhe.cn/toutiao/index?type=&key=da50f3fa460cd818e7c93556c005b454", (err,res) => {
//   console.log('start');
//   let content = JSON.parse(res.body);
//   let datas = content.result.data;
//   for (let item in datas) {
//     let ne = new News({
//       title: datas[item].title,
//       date: datas[item].data,
//       category: datas[item].category,
//       author_name: datas[item].author_name,
//       url: datas[item].url,
//       pict1: datas[item].thumbnail_pic_s,
//       pict2: datas[item].thumbnail_pic_s02,
//       pict3: datas[item].thumbnail_pic_s03
//     })
//     ne.save((err, ret) => {
//       if (err) {
//         console.log('保存失败');
//       } else {
//         console.log('保存成功');
//         console.log(ret);
//       }
//     })
//   }
// })

