module.exports.getLogin = function(request,response){
response.render("login");
};
module.exports.register = function(request,response){
response.render("signup");
});
module.exports.login = function(request,response){
      response.cookie('auth',request.body.mobile);
      response.send('ok');
});
module.exports.token = function(request,response){
      response.send(req.headers['x-access-token']);
});
module.exports.rooms = function(request,response){
if(request.headers['x-access-token']!=undefined)
{
response.render("room");
}else {
response.render("login");
}
});
