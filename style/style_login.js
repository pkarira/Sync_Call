$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
var url='http://10.42.0.1:8080/login';
var login = document.getElementById('login');
login.addEventListener('click', function(){
var http = new XMLHttpRequest();
var params = "mobile="+document.getElementById('mobile').value;
http.open("POST", url, true);
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send(params);
});
