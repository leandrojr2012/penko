const Jwt = require('jsonwebtoken')
const db = require('../db/dataBase')

async function  eFunc(req, res, next){
    try {
        let decoded = Jwt.verify(req.session.token, 'leandro');

        if(decoded){
            next()
        }
    } catch (e) {
        console.log(e)
        res.redirect('/')
    }
}
    
module.exports = eFunc