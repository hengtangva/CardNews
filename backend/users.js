
let mongoose = require('mongoose')

let Schema = mongoose.Schema   //架构，模式

// 1，连接数据库

mongoose.connect('mongodb://localhost/user', {useNewUrlParser: true, useUnifiedTopology: true})

// 2，,设计集合结构,  相当于建表
// 可以设置约束，防止脏数据
const userSchema = new Schema({
  username: {
    type: String,
    required: true  // 必须有
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  }
})

// 3,将文档架构，发布为模型
//  mongoose.model 方法就是用来将一个架构发布为 model
//  第一个参数： 传入一个大写名词当数字字符串用来表示数据库的名称
//              mongoose 会自动将大写名词的字符串生成 小写复数 的集合名称
//              例如，这里的 User 会最终变成 users 集合名称
//  第二个参数：架构 Schema
//  返回值：模型构造函数
let User = mongoose.model('User', userSchema)

// 4, 有了模型构造函数之后，就可以使用这个构造函数对 User 中的数据进行操作
// 新增数据
let admin = new User({
  username: 'th',
  password: '123456',
  email: 'qq@qq.com'
})
//
// admin.save((err, ret) => {
//   if(err) {
//     console.log('保存失败');
//   } else {
//     console.log('保存成功');
//     console.log(ret);
//   }
// })

//(2), 查询数据

//查询所有， 返回的是数组
User.find((err, ret) => {
  if(err) {
    console.log('find err');
  }
  else {
    console.log(ret);
    console.log(ret[0].username);
  }
})

//按条件查，第一个参数为条件
// User.find({username: 'th'},(err, ret) => {
//   if(err) {
//     console.log('find err');
//   }
//   else {
//     console.log(ret);
//   }
// })

//查询单个，  返回时对象（里面的元素）
// User.findOne({username: 'th',password: '123456'},(err, ret) => {
//   if(err) {
//     console.log('find err');
//   }
//   else {
//     console.log(ret);
//   }
// })

// (4)，删除数据
// User.remove({username: 'th'}, (err, ret) => {
//   if(err)  {
//     console.log('remove err');
//   }
//   else {
//     User.find((err,ret) => {
//       if(err) {
//         console.log('find err');
//       }
//       else {
//         console.log(ret);
//       }
//     })
//   }
// })

// (5), 更新数据
// User.findByIdAndUpdate('5fa57feddfb3ac12009015f7',
//     {password: '123'},
//     (err, ret) => {
//       if(err) {
//         console.log('update err');
//       }
//       else{
//         console.log(ret);
//       }
//     }
//     )