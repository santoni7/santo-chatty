var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var db = require('./db.js');
// var connection = db.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }

//   console.log('connected as id ' + connection.threadId);
// });

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendfile('public/index-1.html');
});

io.on('connection', function(socket){
    var id = socket.id;
    var authorized = false;
    var nick = '';
    socket.on('auth', function(data)
    {
        //console.log("auth request arrived");
        if(data.nick != null){
            console.log("auth: " + data.nick);
            authorized = true;
            nick = data.nick;
            //io.json.emit('server message', {message: ''})
        }
    })

    console.log('connection arrived');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('chat message', function(data){
        if(!authorized) return;
        socket.broadcast.json.emit('chat message', data);
        console.log('message('+data.nick+') :' + data.msg);
    })
})

http.listen(3000, function(){
  console.log('listening on *:3000');
});