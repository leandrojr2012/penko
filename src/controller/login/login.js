const loginUsuario = require('../../service/login/login')

exports.loginservice = (req, res) => {
    const dados = req.body
    const usuario = dados.usuario
    const senha = dados.senha

    loginUsuario(usuario, senha)
    .then(jwt => {
        req.session.token = jwt
        res.redirect('/home') 
    }).catch((erros) => {console.log(erros)
        //error_msg = erros
        return res.redirect('/')
    })
}