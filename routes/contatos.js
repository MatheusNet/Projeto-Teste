// Rota CONTATOS - Faz Referência ao Controller de Mesmo nome
module.exports = function(app){

    var contatos = app.controllers.contatos;
    app.get('/contatos', contatos.index);
};