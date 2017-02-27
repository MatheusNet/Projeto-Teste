// Carregando os Módulos
var express       = require('express')
  , load          = require('express-load')   
  , app           = express()
  , cookieParser  = require('cookie-parser') 
  , cookieSession = require('cookie-session')
  , bodyParser    = require('body-parser');
  

/*
 Setando o tamplate das views através
 de variáveis de ambente
 STACK DE CONFIGURAÇÕES DO SERVIDORS
*/ 
//Setando o local onde o app buscará as Views
app.set('views', __dirname + '/views');
//Setanto o tamplate engine que será utilizado
app.set('view engine', 'ejs');
//Midleware gerenciador de cookies
app.use(cookieParser('ntalk'));

//Midleware gerenciador de sessão
app.use(cookieSession({
    secret: 'LOGADO',
    cookie: { maxAge: 24 * 60 * 60 * 6000 } 
    
}))
//Midleware gerenciador de json
app.use(bodyParser.json());
//Midleware gerenciador de urls
app.use(bodyParser.urlencoded({extended: false}));
//Midleware de conteúdos estáticos
app.use(express.static(__dirname + '/public'));

//Carregando todos os módulos que serão utilizados
load('models')
 .then('controllers')
 .then('routes')
 .into(app); 


// catch 404 and forward to error handler
app.listen(3000, function(){
  console.log("Ntalk no ar."); 
});

module.exports = app;



