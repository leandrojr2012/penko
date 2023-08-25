const Jwt = require('jsonwebtoken')
const db = require('../db/dataBase')

async function  eAdmin(req, res, next){
    try {
        let decoded = Jwt.verify(req.session.token, 'leandro');
        const rows = await db.select('funcionarioCondicao')
        .from('funcionario')
        .where({'idfuncionario':decoded.idBd})
        
        let condicaoBd  

        for(let i=0; i<rows.length; i++){
            if(rows[i].funcionarioCondicao){
                condicaoBd = rows[i].funcionarioCondicao
            }
        }
        if(condicaoBd == 1){

            next()
        }else{
            res.send('erro! ADM')
        }
    } catch (e) {
        console.log(e)
        res.redirect('/')
    }
}
    
module.exports = eAdmin



           // res.locals.usuarioLogado = decoded.idBd
