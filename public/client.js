var socket = io.connect('http://10.42.0.1:8080');
// var Player = require('player');
var number = document.getElementById('number'),
      btn = document.getElementById('reject'),
      name = document.getElementById('name'),
      pick=document.getElementById('pick');
// var player = new Player('/home/pulkit/Downloads/music.mp3');
btn.addEventListener('click', function(){
  // player.stop()
  socket.emit('reject', {
      message: "reject"
  });
});
pick.addEventListener('click',function(){
  // player.stop()
  socket.emit('pick', {
      message: "pick"
  });
});
socket.on('contactInfo', function(data){
    // player.play(function(err, player){
    //  });
    document.getElementById('name').innerHTML+= data.name;
    document.getElementById('number').innerHTML+=  data.number;
});
