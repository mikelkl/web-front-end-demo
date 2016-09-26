var mongnoose = require('mongoose');
require('./model.js');

var Book = mongnoose.model("Book");

// 请务必注意， find 和 findOne 得到的结果是不一样的，前者是一个数组，后者直接是一个对象
Book.findOne({author:"Green"}, function (err,doc) {
    if (err){
        console.log('err:', err);
        return;
    }
    doc.author="Jim";
    doc.save();
    console.log('findOne result: ', doc);
})