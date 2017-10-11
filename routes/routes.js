var express=require('express');
var app=express();
var socket = require('socket.io');
var server =app.listen(8080,'10.42.0.1');
var users = require('../app/controllers/users_controller');
app.set('view engine','ejs');
//app.use(express.static('public'));
var cookieParser= require('cookie-parser')
app.use(cookieParser());
var io = socket(server);
io.on('connection',function(socket) {
    console.log('made socket connection', socket.id);
    socket.on('reject', function(data){
    socket.in(data.room).broadcast.emit('reject', data);
       //socket.broadcast.emit('reject', data);
   });
   socket.on('contactInfo', function(data){
     console.log(data.room);
     socket.in(data.room).broadcast.emit('contactInfo', data);
      // socket.broadcast.emit('contactInfo', data);
   });
   socket.on('pick', function(data){
     socket.in(data.room).broadcast.emit('pick', data);
      // socket.broadcast.emit('pick', data);
   });
   socket.on('room', function(room) {
        socket.join(room);
    });
});
app.post('/login',urlParser,users.create);
app.post('/',urlParser,users.rooms);
app.get('/getroom',urlParser,users.token);
