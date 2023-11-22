const db = require('../../db/dataBase')
const dayjs = require('dayjs')

async function update_status(entrada_status_desc_idstatus_entrada, entrada_status_desc_identrada){

    try{

        let status_string  
        
        let dataday = dayjs()
        let data_recebimento = dataday.add(30, 'day')
        

            await db('entrada_status_descricao')
            .where({entrada_status_desc_identrada : entrada_status_desc_identrada})
            .update({entrada_status_desc_ativo:0})

            await db.insert({entrada_status_desc_idstatus_entrada: entrada_status_desc_idstatus_entrada ,
                             entrada_status_desc_data: new Date(),
                             entrada_status_desc_identrada: entrada_status_desc_identrada,
                             entrada_status_desc_ativo: 1})
            .into("entrada_status_descricao")

            

            if(entrada_status_desc_idstatus_entrada == 4){
                    await db.insert({entrada_not_cob_data_recebimento : data_recebimento.$d,
                                     entrada_not_cob_email_enviado: 0,
                                     entrada_not_cob_identrada: entrada_status_desc_identrada})
                            .into("entrada_notificacao_cobranca")
            }


            const joindescricao =  await db.select('idstatus_entrada', 'status_entrada_status')
                                           .from('status_entrada')
                                           .join('entrada_status_descricao',{'idstatus_entrada':'entrada_status_desc_idstatus_entrada'})
                                           .where({idstatus_entrada : entrada_status_desc_idstatus_entrada})

                            for(let i in joindescricao){
                                if(joindescricao){
                                    status_string = joindescricao[i].status_entrada_status
                                }
                            }
            return {
                'descricao':status_string
        
            }        

    }catch(e){console.log(e)}
}

module.exports = update_status