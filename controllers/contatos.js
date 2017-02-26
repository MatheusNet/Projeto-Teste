module.exports = function(app){
    var ContatoController = {

        //ACTION INDEX
        index: function(req, res){

            //Recebendo os dados do usuário 
            var usuario = req.session.usuario
               ,params  = {ususario: usuario};

            //Enviando os parâmetros do usuário para a View
             res.render('/contatos/index', params);            


        }
    }
    return ContatoController;
};