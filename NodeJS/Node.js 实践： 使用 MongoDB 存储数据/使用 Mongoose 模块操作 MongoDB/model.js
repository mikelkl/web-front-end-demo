var mongnoose = require('mongoose');

var uri = 'mongodb://localhost/part9';

mongnoose.connect(uri);

var BookSchema = new mongnoose.Schema({
    name: String,
    author: String,
    publishTime: Date
});

mongnoose.model('Book', BookSchema);