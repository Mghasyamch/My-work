var express=require('express');
var app=express();
app.get('/',function(req,res)
{
  res.send('Web development using Express');

});
var server=app.listen(3004,function(){});

console.log('Express server app is started browser at http://localhost:3004 ');