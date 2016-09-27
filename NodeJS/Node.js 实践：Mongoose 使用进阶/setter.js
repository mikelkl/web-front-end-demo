var mongnoose = require('mongoose');

var uri = 'mongodb://localhost/part10';

mongnoose.connect(uri);

var User = mongnoose.model('User', {
    nickname: {
        type: String,
        // 预定义的修饰符
        trim: true
    },
    blog: {
        type: String,
        // 自定义的 setter 修饰符
        set: function (url) {
            if (!url) return url;

            if (0 !== url.indexOf('http://') && 0 !== url.indexOf('https://')) {
                url = 'http://' + url;
            }

            return url;
        }
    }
});

var user = new User({
    nickname: ' Sid ',
    blog: '163.com'
});

console.log('user: ', user);