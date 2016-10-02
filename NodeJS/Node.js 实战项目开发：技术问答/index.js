var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.render('home.ejs', {name: 'mikelkl'});
});

app.get('/request/:id', function (req, res) {
    var locals = {name: 'mikelkl', 'id': req.params['id']};
    res.render('home.ejs', locals);
});


app.listen(3000);