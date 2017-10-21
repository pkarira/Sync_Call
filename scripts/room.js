var number = document.getElementById('number'),
      btn = document.getElementById('reject'),
      name = document.getElementById('name'),
      pick=document.getElementById('pick');
      logout=document.getElementById('logout');
var player = document.getElementById("myAudio");
var url='https://sync-call.herokuapp.com/';
//var url='http://127.0.0.1:5000/'
var room=httpGet(url+'getroom');
var socket = io.connect(url);
btn.addEventListener('click', function(){
  player.pause()
  clearInterval(textColor);
  document.getElementById('name').value= "";
  document.getElementById('number').value=  "";
  socket.emit('reject', {
      message: "reject",
      room: room
  });
});
pick.addEventListener('click',function(){
  player.pause();
  clearInterval(textColor);
  document.getElementById('name').value= "";
  document.getElementById('number').value=  "";
  socket.emit('pick', {
      message: "pick",
      room: room
  });
});
logout.addEventListener('click',function()
{
  socket.emit('logout', {
      room: room
  });
  httpGet(url+'logout');
  window.location=url
});
socket.on('connect', function() {
   socket.emit('room', room);
});
socket.on('stop', function() {
   player.pause();
   clearInterval(textColor);
});
socket.on('contactInfo', function(data){
    player.play();
    console.log('in room');
    var colors = ['white', 'red', 'yellow'];
    var active = 0;
    window.textColor=setInterval(function(){
    document.querySelector('h1').style.color = colors[active];
    active++;
    if (active == colors.length) active = 0;
  },750);
    document.getElementById('name').value= data.name;
    document.getElementById('number').value=  data.number;
});
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
