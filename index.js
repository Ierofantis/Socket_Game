var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);
app.use(express.static(__dirname + '/public'));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/', function(req, res){
	res.render('index');
});

io.on('connection', function(socket){
	socket.on('toggle', function(msg){
		io.emit('toggle', msg);
	});	
	socket.on('t', function(msg){
		io.emit('t', msg);
	});	
	socket.on('move', function(msg){
		io.emit('move', msg);
		console.log(msg)
	});	
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});
