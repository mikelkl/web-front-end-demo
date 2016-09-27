var mongnoose = require('mongoose');

var uri = 'mongodb://localhost/part10';

mongnoose.connect(uri);

var UserSchema = new mongnoose.Schema({
    nickname:{
        type: String,
        // 固定值的默认值
        default: 'new user'
    },
    regTim:{
        type:Date,
        // 根据时间生成的默认值
        default:Date.now
    }
});

var User = mongnoose.model('Book', UserSchema);

var user = new User();

console.log('user: ', user);