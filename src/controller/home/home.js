exports.home =  (req, res) => {
    //req.session.usuario = {nome:'leandro', logado: true}
    console.log(req.session.usuario)
    res. render('home')
}