// CONTROLLER - Home
module.exports = function(app){
    var HomeController = {
        //ACTION - INDEX
        index: function(req, res){
            res.render('home/index');
        },

        //ACTION - LOGIN
        login: function(req, res){

        //Pegando os dados do formulário
        var email  = req.body.usuario.email,
            nome   = req.body.usuario.nome;

            if(usuario && email){
             var usuario = req.body.usuario;
             usuario['contatos'] = [];
             req.session.usuario = usuario;
             res.redirect('/contatos');
            } else {
                res.redirect('/');
            }
         },

         //ACTION - LOGOUT
         logou: function(req, res){

             req.session.destroy();
             res.redirect('/');
         }
    };
    
    return HomeController;
};