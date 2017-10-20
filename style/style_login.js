var url='https://sync-call.herokuapp.com/login';
var login = document.getElementById('login');
login.addEventListener('click', function(){
var http = new XMLHttpRequest();
var params = "mobile="+document.getElementById('mobile').value;
http.open("POST", url, true);
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        window.location="https://sync-call.herokuapp.com/"
    }
}
http.send(params);
});
