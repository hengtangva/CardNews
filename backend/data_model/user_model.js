
//这里是用户表的设计模式

var mongoose = require('mongoose');
let Schema = mongoose.Schema
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
module.exports = mongoose.model('users', userSchema);