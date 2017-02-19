// Carregando os Módulos
var express = require('express')
  , load    = require("express-load")  
  , app     = express();

/*
 Setando o tamplate das views através
 de variáveis de ambente
 STACK DE CONFIGURAÇÕES DO SERVIDOR


app.use(express.static(__dirname + '/public'));
*/ 
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

//app.use(express.static(__dirname + '/public'));


load('models')
 .then('controllers')
 .then('routes')
 .into(app); 


// catch 404 and forward to error handler
app.listen(3000, function(){
  console.log("Ntalk no ar."); 
});

module.exports = app;



