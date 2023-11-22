const db = require('../db/dataBase');

async function busca_data(){

    let data_atual = new Date()
    let data_dia = data_atual.getDate().toString()
    let data_mes = (data_atual.getMonth()+2).toString()
    let data_ano = data_atual.getFullYear().toString()

    let data_final = data_ano + '-' + data_mes + '-' + data_dia
    
    let data_teste = '2023-12-17'

    const data = await db.select('entrada_not_cob_data_recebimento')
                         .from('entrada_notificacao_cobranca')

        for(let i in data){
            if(data){
                let nova_data = data[i].entrada_not_cob_data_recebimento
                let nova_dia = nova_data.getDate().toString()
                let nova_mes = (nova_data.getMonth()+1).toString()
                let nova_ano = nova_data.getFullYear().toString()
                let data_banco = nova_ano+'-'+nova_mes+'-'+nova_dia

                if(data_teste == data_banco){
                    await db('entrada_notificacao_cobranca')
                    .where({entrada_status_desc_identrada : entrada_status_desc_identrada})
                    .update({entrada_not_cob_email_enviado:1})
                }
                
            }
        }

}

busca_data()

