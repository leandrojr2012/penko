const db = require('../db/dataBase');

async function busca_data(){

    let data_atual = new Date()
    let data_dia = data_atual.getDate().toString()
    let data_mes = (data_atual.getMonth()+2).toString()
    let data_ano = data_atual.getFullYear().toString()

    let data_final = data_ano + '-' + data_mes + '-' + data_dia
    
    let data_teste = 2023-12-17

    const data = await db.select('entrada_not_cob_data_recebimento')
                         .from('entrada_notificacao_cobranca')

        for(let i in data){
            if(data){
                let nova_data = data[i].entrada_not_cob_data_recebimento
            console.log(nova_data.slice(0,9))
            }
        }


    if(data == data_teste){
        console.log('teste ok')
    }

}

busca_data()


