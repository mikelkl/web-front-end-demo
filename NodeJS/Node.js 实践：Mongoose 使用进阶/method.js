var mongnoose = require('mongoose');

var uri = 'mongodb://localhost/part10';

mongnoose.connect(uri);

var BookSchema = new mongnoose.Schema({
    name: String,
    isbn: Number
});

// 静态方法
BookSchema.statics.findByISBN = function (isbn, cb) {
    this.findOne({isbn: isbn}, function (err, doc) {
        cb(err, doc);
    });
};

// 实例方法
BookSchema.methods.print = function () {
    console.log('Book Information:');
    console.log('\tTitle:', this.name);
    console.log('\tISBN:', this.isbn);
};

var Book = mongnoose.model('Book', BookSchema);

var book = new Book({
    name: 'MEAN web Development',
    isbn: 9787100
});

book.save(function (err) {
    if (err) {
        return console.log('save book failed', err);
    }

    Book.findByISBN(9787100, function (err, doc) {
        console.log('findByISBN, err, doc:', err, doc);
    });

    book.print();
})
