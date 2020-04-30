var request=require('request');
var express=require("express");
var app=express();
app.get('/results',function(req,res)
{

request('https://www.google.com/',function(error,response,body){
    if(!error && statusCode==200)
    {
        var results=JSON.parse(body)
        res.send(results["Search"],[tiger]);
        console.log("something is wrong!");
        console.log(error);
    }


});

});
