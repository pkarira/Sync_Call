var socket = io.connect('http://10.42.0.1:8080');
var number = document.getElementById('number'),
      btn = document.getElementById('reject'),
      name = document.getElementById('name'),
      test=document.getElementById('test');
btn.addEventListener('click', function(){
  console.log("csjhsjd");
  socket.emit('reject', {
      message: "reject",
  });
  message.value = "";
});
test.addEventListener('click', function(){
  socket.emit('contactInfo', {
      number: "isdfdsf",
      name:"cdddfdff",
  });
});
socket.on('contactInfo', function(data){
    name.innerHTML = data.name  ;
    number.innerHTML =  data.number;
});
