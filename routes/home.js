// Rota HOME - Faz Referência ao Controller de Mesmo nome
module.exports = function(app){

  var home = app.controllers.home;
  app.get('/'      , home.index);
  app.get('/entrar', home.login);
  app.get('/sair'  , home.logout);

};


