var mongnoose = require('mongoose');

var uri = 'mongodb://localhost/part10';

mongnoose.connect(uri);

var OrderSchema = new mongnoose.Schema({
    count: {
        type: Number,
        // 是否必须的校验器
        required: true,
        // 数字类型的最大值校验器
        max: 1000,
        // 数字类型的最小值校验器
        min: 10
    },
    status: {
        type: String,
        // 设置字符串的可选值
        enum: ['created', 'sucess', 'failed']
    },
    desc: {
        type: String,
        // 使用正则表达式来校验字符串的内容
        match: /book/g,
        // 自定义的验证器，如果通过验证返回 true，没有通过则返回 false
        validate: function (desc) {
            return desc.length >= 10;
        }
    }
});

var Order = mongnoose.model('Order', OrderSchema);

var order = new Order();
order.count = 10;
order.status = 'created';
order.desc = 'this is a great book';

order.save(function (err) {
    if (err) {
        return console.log('save failed', err);
    }

    console.log('save success');
});
