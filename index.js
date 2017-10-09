var express=require('express');
var app=express();
var socket = require('socket.io');
var server =app.listen(8080,'10.42.0.1');
// var Player = require('player');
//var player = new Player('/home/pulkit/Downloads/music.mp3');
//var load = require('audio-loader')
// player.play(function(err, player){
// console.log('playend!');
// });
// load('/home/pulkit/Downloads/music.mp3').then(function (buffer) {
//   play(buffer);
// });
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
       socket.broadcast.emit('contactInfo', data);
   });
});
