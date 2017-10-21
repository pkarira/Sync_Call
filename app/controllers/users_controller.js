module.exports.getLogin = function(request,response){
response.render("login");
};
module.exports.login = function(request,response){
      response.cookie('auth',request.body.mobile);
      response.send("done");
};
module.exports.logout = function(request,response){
  response.cookie("auth", "", { expires: new Date()});
  response.cookie("io", "", { expires: new Date()});
  response.send("Done");
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
