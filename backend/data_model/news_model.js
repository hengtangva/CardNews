var mongoose = require('mongoose');
let Schema = mongoose.Schema


const newsSchema = new Schema({
  uniquekey: {
    type: String,
  },
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

module.exports = mongoose.model('news', newsSchema);