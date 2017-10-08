var express=require('express');
var app=express();
var socket = require('socket.io');
var server =app.listen(8080,'10.42.0.1');
app.set('view engine','ejs');
app.get('/callob',function(req,res)
{
  res.render("client")
}
);
var io = socket(server);
io.on('connection',function(socket) {
    console.log('made socket connection', socket.id);
    socket.on('chat', function(data){
       io.sockets.emit('chat', data);
   });
   socket.on('typing', function(data){
       socket.broadcast.emit('typing', data);
   });
});
