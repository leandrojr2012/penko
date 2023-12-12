const db = require('../db/dataBase');
const nodemailer = require('nodemailer')

async function busca_data(){

    let data_atual = new Date()
    let data_dia = data_atual.getDate().toString()
    let data_mes = (data_atual.getMonth()+2).toString()
    let data_ano = data_atual.getFullYear().toString()

    let data_final = data_ano + '-' + data_mes + '-' + data_dia
    
    let data_teste = '2023-12-21'

    const data = await db.select('entrada_not_cob_data_recebimento', 'entrada_not_cob_identrada')
                         .from('entrada_notificacao_cobranca')

        for(let i in data){
            if(data){
                let nova_data = data[i].entrada_not_cob_data_recebimento
                let nova_dia = nova_data.getDate().toString()
                let nova_mes = (nova_data.getMonth()+1).toString()
                let nova_ano = nova_data.getFullYear().toString()
                let data_banco = nova_ano+'-'+nova_mes+'-'+nova_dia

                console.log('data: ' + data_banco + ' id: ' + data[i].entrada_not_cob_identrada)

                //if(data_teste === data_banco && data[i].entrada_not_cob_email_enviado == 0){
                    if(data_teste == '2024-01-10'){

                    let config = nodemailer.createTransport({
                        host: 'smtp.gmail.com',
                        port: 465,
                        secure: true,
                        auth: {
                            user: 'leandro.daniel.jr@gmail.com',
                            pass: 'yurf zmik ulao blua',
                        },
                        tls: {
                            rejectUnauthorized: false
                        }
                    }).

                    config.sendMail({
                        from:'Leandro_Email <leandro.daniel.jr@gmail.com>',
                        to:'leandro.daniel.jr@gmail.com',
                        subject:'teste envio email (id: ' + data[i].entrada_not_cob_identrada + ' )',
                        html: '<h1>Ola, teste</h1> id:  ' + data[i].entrada_not_cob_identrada  + ' teste email',
                        text: 'id: ' + data[i].entrada_not_cob_identrada + " teste email *esse;"
                    })
                    .then(async()=>{
                                await db('entrada_notificacao_cobranca')
                                .where({entrada_not_cob_identrada: entrada_not_cob_identrada})
                                .update({entrada_not_cob_email_enviado:1})
                    })
                    .catch((err)=> console.log(err))

                    /*db('entrada_notificacao_cobranca')
                    .where({entrada_not_cob_data_recebimento : data_teste})
                    .where({entrada_not_cob_email_enviado:0})
                    .update({entrada_not_cob_email_enviado:1})*/
                }
                
            }
        }

}

busca_data()

