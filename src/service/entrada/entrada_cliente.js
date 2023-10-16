const e = require('express')
const db = require('../../db/dataBase')


async function entrada_cliente(entrada_idcliente, entrada_idservico, entrada_valor, 
                               entrada_desc_identrada, entrada_desc_idcliente_desc_peca,
                               entrada_desc_diametro, entrada_desc_comprimento, entrada_status_desc_idstatus_entrada,
                               entrada_status_desc_identrada){

            const ativo = 1

            try{

                    await db.insert({
                        entrada_idcliente,
                        entrada_idservico,
                        entrada_valor: Number(entrada_valor),
                        entrada_data: new Date()
                    }).into('entrada')


                    await db.insert({
                        entrada_desc_identrada,
                        entrada_desc_idcliente_desc_peca,
                        entrada_desc_diametro: Number(entrada_desc_diametro), 
                        entrada_desc_comprimento: Number(entrada_desc_comprimento)
                    }).into('entrada_descricao')


                    await db.insert({
                        entrada_status_desc_idstatus_entrada,
                        entrada_status_desc_data: new Date(),
                        entrada_status_desc_identrada,
                        entrada_status_desc_ativo: ativo
                    }).into('entrada_status_descricao')

            }catch(e){
                console.log(e)
            }

}

module.exports = entrada_cliente