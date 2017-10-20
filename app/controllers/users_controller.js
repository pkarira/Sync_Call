module.exports.getLogin = function(request,response){
response.render("login");
};
module.exports.register = function(request,response){
response.render("signup");
};
module.exports.login = function(request,response){
      response.cookie('auth',request.body.mobile);
      response.render("room");
};
module.exports.logout = function(request,response){
request.logOut();
request.session.destroy(function (err) {
});
};
module.exports.token = function(request,response){
  var index=request.headers['cookie'].indexOf('auth')
  response.send(request.headers['cookie'].substr(index+5,10))
};
module.exports.rooms = function(request,response){
var index=-1;
if(request.headers['cookie']!=undefined)
{
  var index=request.headers['cookie'].indexOf('auth')
}
if(index!=-1 && request.headers['cookie'].substr(index+5)!=undefined)
{
response.render("room");
}else {
response.render("login");
}
};
