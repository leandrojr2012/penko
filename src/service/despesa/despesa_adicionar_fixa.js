const db = require('../../db/dataBase')

async function despesa_fixa_adicionar_service(
                                                despesa_fixa_adicionar_iddespesa_fixa, 
                                                despesa_fixa_adicionar_valor, 
                                                despesa_fixa_adicionar_data, 
                                                despesa_fixa_adicionar_obs){

        try{
            await db.insert({
                         despesa_fixa_adicionar_iddespesa_fixa: Number(despesa_fixa_adicionar_iddespesa_fixa),
                         despesa_fixa_adicionar_valor: Number(despesa_fixa_adicionar_valor),
                         despesa_fixa_adicionar_data,
                         despesa_fixa_adicionar_obs
                            })
                    .into('despesa_fixa_adicionar')
    
        }catch(e){
            console.log(e)
        }

}

module.exports = despesa_fixa_adicionar_service