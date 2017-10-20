var express=require('express');
var app=express();
var socket = require('socket.io');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlParser = bodyParser.urlencoded({extended:false});
var server =app.listen(process.env.PORT || 5000,function(){
});
var users = require('./app/controllers/users_controller');
var path = require('path');
socket.heartbeatTimeout = 604800000;
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'app/views'));
app.use('/scripts/',express.static('scripts'));
app.use('/style/',express.static('style'));
var cookieParser= require('cookie-parser')
app.use(cookieParser());
var io = socket(server);
io.on('connection',function(socket) {
    console.log('made socket connection', socket.id);
    socket.on('reject', function(data){
    socket.in(data.room).broadcast.emit('reject', data);
   });
   socket.on('contactInfo', function(data){
     socket.in(data.room).broadcast.emit('contactInfo', data);
     console.log('in contact info');
   });
   socket.on('logout', function(data){
     socket.leave(data.room);
   });
   socket.on('pick', function(data){
     socket.in(data.room).broadcast.emit('pick', data);
   });
   socket.on('room', function(room) {
     console.log('room', room);
        socket.join(room);
    });
    socket.on('stop', function(data) {
      socket.in(data.room).broadcast.emit('stop', data);
     });
});
app.post('/login',urlParser,users.login);
app.get('/',users.rooms);
app.get('/logout',users.logout);
app.get('/getroom',users.token);
