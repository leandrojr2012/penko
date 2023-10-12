const db = require('../../db/dataBase')

async function despesa_variavel_cadastro_service(despesa_variavel_cad_nome, despesa_variavel_cad_tipo){

    try{

        await db.insert({despesa_variavel_cad_nome, despesa_variavel_cad_tipo})
                .into('despesa_variavel_cadastrar')

    }catch(e){

        console.log(e)
    }

}

module.exports = despesa_variavel_cadastro_service