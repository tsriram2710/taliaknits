var request = require('superagent');
var express = require('express');
var app = express();
var parser = require('body-parser');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(parser.urlencoded({ extended: false}))
app.use(parser.json())
app.use (express.static('views'));


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

/*app.post('/contactsubmit',function(req,res){
    var data = {
        first : req.body.fname,
        last : req.body.lname,
        email : req.body.email,
        message : req.body.message
    }
    console.log(data);
    res.render('pages/contactsubmit',{
        userValue : data,
        topicHead : 'Submission Recieved!'
    });
    //res.json(student);
     
});*/

var mailchimpInstance   = 'us10',
    listUniqueId        = '6f7a38258d',
    mailchimpApiKey     = '83e5018de51b8a18f02a4402b6208f15-us10';

app.post('/contactsubmit', function(req, res) {
	request
        .post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
        .set('Content-Type', 'application/json;charset=utf-8')
        .set('Authorization', 'Basic ' + new Buffer.from('any:' + mailchimpApiKey ).toString('base64'))
        .send({
          'email_address': req.body.email,
          'status': 'subscribed',
          'merge_fields': {
            'FNAME': req.body.fname,
            'LNAME': req.body.lname
}
 })
 		.end(function(err, response) {
 			  //console.log(response);
              if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
                res.send('Signed Up!');
              } else {
                res.send('Sign Up Failed :(');
              }
          });
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
