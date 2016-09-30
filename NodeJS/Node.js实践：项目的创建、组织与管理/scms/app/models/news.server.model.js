var mongnoose = require('mongoose');

var NewsSchema = new mongnoose.Schema({
    title: String,
    content: String,
    // 设置默认值
    createTime: {type: Date, default: Date.now}
});

var News = mongnoose.model('News', NewsSchema);
