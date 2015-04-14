var express = require('express');

var app = express();

//Set up handlebars view engine

var handlebars = require('express-handlebars')
	.create({defaultLayout: 'main'});


app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 8080);

//The static middleware


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('home');
});


app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:'+app.get('port'));
});

require('./public/js/led.js')(app);