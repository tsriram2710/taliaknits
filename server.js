var express = require('express');
var app = express();
var parser = require('body-parser');
//app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(parser.urlencoded({ extended: false}))
app.use(parser.json())

//index page
app.get('/', function(req,res) {
	res.render('pages/index');
});

app.get('/projects', function(req,res) {
	res.render('pages/projects');
});
app.get('/howtovideos', function(req,res) {
	res.render('pages/howtovideos');
});
app.get('/commonerrors', function(req,res) {
	res.render('pages/commonerrors');
});
app.get('/mymaterials', function(req,res) {
	res.render('pages/mymaterials');
});
app.get('/myblog', function(req,res) {
	res.render('pages/myblog');
});
app.get('/shop', function(req,res) {
	res.render('pages/shop');
});

//contact submission
app.get('/contactme',function(req,res){
    res.render('pages/contactme',{
        topicHead : 'Send Me A Message:',
    });
    console.log('user accessing Home page');
});

app.post('/contactsubmit',function(req,res){
    var data = {
        first : req.body.fname
    }
    console.log(data);
    res.render('pages/contactsubmit',{
        userValue : data,
        topicHead : 'Message Submission'
    });
    //res.json(student);
     
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
