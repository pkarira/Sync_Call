//var Player = require('player');
//var express=require('express');
var number = document.getElementById('number'),
      btn = document.getElementById('reject'),
      name = document.getElementById('name'),
      pick=document.getElementById('pick');
// var player = new Player('/home/pulkit/Downloads/music.mp3');
var url='http://10.42.0.1:8080';
global.room=httpGet(url);
var socket = io.connect(url);
btn.addEventListener('click', function(){
  // player.stop()
  socket.emit('reject', {
      message: "reject"
  });
});
pick.addEventListener('click',function(){
  // player.stop()
  // socket.emit('pick', {
  //     message: "pick"
  // });
  socket.emit('contactInfo', {
      name:"fgdfgd",
      number:"sdsd"
  });
});
socket.on('connect', function() {
   socket.emit('room', room);
});
socket.on('contactInfo', function(data){
    // player.play(function(err, player){
    //  });
    document.getElementById('name').innerHTML+= data.name;
    document.getElementById('number').innerHTML+=  data.number;
});
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
