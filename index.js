var express=require('express');
var app=express();
var socket = require('socket.io');
var server =app.listen(8080,'10.42.0.1');
app.set('view engine','ejs');
app.use(express.static('public'));
var io = socket(server);
io.on('connection',function(socket) {
    console.log('made socket connection', socket.id);
    socket.on('reject', function(data){
       socket.broadcast.emit('reject', data);
   });
   socket.on('contactInfo', function(data){
       console.log("receiver contact");
       console.log(data.name);
       console.log(data.number);
       socket.broadcast.emit('contactInfo', data);
   });
   socket.on('pick', function(data){
       socket.broadcast.emit('pick', data);
   });
});
