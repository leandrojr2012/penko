const db = require('../../db/dataBase')

async function despesa_variavel_adicionar_service(despesa_variavel_adicionar_iddespesa_variavel_cad,
                                                  despesa_variavel_adicionar_valor,
                                                  despesa_variavel_adicionar_data,
                                                  despesa_variavel_adicionar_obs){
                                                    
        try{

            await db.insert({despesa_variavel_adicionar_iddespesa_variavel_cad: Number(despesa_variavel_adicionar_iddespesa_variavel_cad),
                             despesa_variavel_adicionar_valor: Number(despesa_variavel_adicionar_valor),
                             despesa_variavel_adicionar_data,
                             despesa_variavel_adicionar_obs})
                    .into('despesa_variavel_adicionar')

        }catch(e){

            console.log(e)

        }
    }

    module.exports = despesa_variavel_adicionar_service