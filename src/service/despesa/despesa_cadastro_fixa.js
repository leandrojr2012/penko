const db = require('../../db/dataBase')

async function despesa_fixa_cadastro_service(despesa_fixa_nome, despesa_fixa_tipo){

    try{
        await db.insert({
                     despesa_fixa_nome, despesa_fixa_tipo
                        })
                .into("despesa_fixa")

    }catch(e){
        console.log(e)
    }

}

module.exports = despesa_fixa_cadastro_service