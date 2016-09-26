var mongnoose = require('mongoose');
require('./model.js');

var Book = mongnoose.model("Book");

Book.find({}, function (err, docs) {
    if (err){
        console.log('err:', err);
        return;
    }

    console.log('result:', docs);
});