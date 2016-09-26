var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('User');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/test', function (req, res, next) {
    var user = new User({
        uid: 1,
        username: 'Sid'
    });

    user.save(function (err) {
        if (err) {
            res.end('Error');
            return next();
        }

        User.find({}, function (err, docs) {
            if (err) {
                res.end('Error');
                return next();
            }

            res.json(docs);
        });
    });
});

module.exports = router;
