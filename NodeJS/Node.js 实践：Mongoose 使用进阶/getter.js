var mongnoose = require('mongoose');

var uri = 'mongodb://localhost/part10';

mongnoose.connect(uri);

var User = mongnoose.model('User', {
    blog: {
        type: String,
        //自定义的 getter 修饰符
        get: function (url) {
            if (!url) return url;

            if (0 !== url.indexOf('http://') && 0 !== url.indexOf('https://')) {
                url = 'http://' + url;
            }

            return url;
        }
    }
});

var user = new User({
    blog: '163.com'
});

user.save(function (err) {
    if (err){
        return console.log('save error:', err);
    }

    console.log('blog url: ', user.blog);
})

