var express = require('express');
var app = express();
//app.use(express.static('public'));
app.set('view engine', 'ejs');

//index page
app.get('/', function(req,res) {
	res.render('pages/index');
});

//about page
app.get('/about', function(req,res) {
	res.render('pages/about');
});


/*app.get('/', function (req, res) {
   res.send('Hello World');
})*/

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
