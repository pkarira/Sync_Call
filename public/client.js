var socket = io.connect('http://10.42.0.1:8080');
// var Player = require('player');
// var player = new Player('/home/pulkit/Downloads/music.mp3');
var number = document.getElementById('number'),
      btn = document.getElementById('reject'),
      name = document.getElementById('name'),
      test=document.getElementById('test');
btn.addEventListener('click', function(){
  socket.emit('reject', {
      message: "reject"
  });
});
// test.addEventListener('click', function(){
// //   player.play(function(err, player){
// //   console.log('playend!');
// // });
//   socket.emit('contactInfo', {
//       number: "isdfdsf",
//       name:"cdddfdff",
//   });
// });
socket.on('contactInfo', function(data){
    name.innerHTML = data.name  ;
    number.innerHTML =  data.number;
});
