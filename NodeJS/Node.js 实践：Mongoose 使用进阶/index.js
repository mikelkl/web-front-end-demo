var mongnoose = require('mongoose');

var PersonSchema = new mongnoose.Schema({
    isbn: {
        type: Number,
        // 唯一索引
        unique: true
    },
    name: {
        type: String,
        // 辅助索引
        index: true
    }
});