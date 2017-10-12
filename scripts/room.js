var number = document.getElementById('number'),
      btn = document.getElementById('reject'),
      name = document.getElementById('name'),
      pick=document.getElementById('pick');
var player = document.getElementById("myAudio");
var url='http://10.42.0.1:8080';
var room=httpGet(url);
var socket = io.connect(url);
btn.addEventListener('click', function(){
   player.pause()
  socket.emit('reject', {
      message: "reject",
      room: room
  });
});
pick.addEventListener('click',function(){
  player.play();
  // socket.emit('pick', {
  //     message: "pick",
  //     room: room
  // });
  socket.emit('contactInfo', {
      name:"fgdfgd",
      number:"sdsd",
      room: room
  });
});
socket.on('connect', function() {
   socket.emit('room', room);
});
socket.on('contactInfo', function(data){
    player.play();
    document.getElementById('name').innerHTML+= data.name;
    document.getElementById('number').innerHTML+=  data.number;
});
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl+"/getroom", false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
