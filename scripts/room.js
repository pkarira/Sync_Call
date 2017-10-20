var number = document.getElementById('number'),
      btn = document.getElementById('reject'),
      name = document.getElementById('name'),
      pick=document.getElementById('pick');
      logout=document.getElementById('logout');
var player = document.getElementById("myAudio");
var url='https://sync-call.herokuapp.com/';
var room=httpGet(url);
var socket = io.connect(url);
btn.addEventListener('click', function(){
  player.pause()
  document.querySelector('h1').style.color = 'white';
  socket.emit('reject', {
      message: "reject",
      room: room
  });
});
pick.addEventListener('click',function(){
  player.pause();
  document.querySelector('h1').style.color = 'white';
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
  window.location="https://sync-call.herokuapp.com/"
});
socket.on('connect', function() {
   socket.emit('room', room);
});
socket.on('stop', function() {
   player.pause();
   document.querySelector('h1').style.color = 'white';
});
socket.on('contactInfo', function(data){
    player.play();
    console.log('in room');
    var colors = ['white', 'red', 'yellow'];
    var active = 0;
    setInterval(function(){
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
    xmlHttp.open( "GET", theUrl+"getroom", false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
