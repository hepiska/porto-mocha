var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userMemo = new Schema ({
  "title":String,
  "memo":String,
});

var Memo = mongoose.model('Memo', userMemo);

module.exports = Memo;
