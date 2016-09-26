var mongnoose = require('mongoose');
require('./model.js');

var Book = mongnoose.model("Book");

var book = new Book({
    name: "MEAN Web Development",
    author: 'Green',
    publishTime: new Date()
});

book.save(function (err) {
    console.log('save status:', err ? 'failed' : 'success');
});