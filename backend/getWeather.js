
const request = require('request');

request("http://apis.juhe.cn/simpleWeather/query?type=&key=da50f3fa460cd818e7c93556c005b454", (err,res) => {
  console.log('start');
  let content = JSON.parse(res.body);
  let datas = content.result.data;
  console.log(datas);
})

