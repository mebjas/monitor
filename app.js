var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', function(req, res) {
	res.redirect('/dashboard');
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/dashboard', require('./routes').index);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
