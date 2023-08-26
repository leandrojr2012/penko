const db = require('../../db/dataBase')

async function orcamento_cliente(orcamento_id_cliente, orcamento_id_servico, orcamento_id_cliente_desc_peca,
                                 orcamento_diametro_peca, orcamento_comprimento_peca, orcamento_id_unidade, 
                                 orcamento_camada_peca, orcamento_fator_x, orcamento_valor_total,
                                 orcamento_descricao_id_orcamento, orcamento_frete, orcamento_frete_valor, 
                                 orcamento_pagamento, orcamento_pg_forma_parcelado, orcamento_prazo_entrega, 
                                 orcamento_desconto){

    try{

        await db.insert({   orcamento_id_cliente, orcamento_frete, 
                            orcamento_frete_valor: Number(orcamento_frete_valor), 
                            orcamento_pagamento, 
                            orcamento_pg_forma_parcelado: Number(orcamento_pg_forma_parcelado), 
                            orcamento_prazo_entrega,
                            orcamento_desconto: Number(orcamento_desconto)
                    })
            .into("orcamento")
        

        for (let i in orcamento_id_servico){

        await db.insert({   orcamento_id_servico: orcamento_id_servico[i], 
                            orcamento_id_cliente_desc_peca: orcamento_id_cliente_desc_peca[i],
                            orcamento_diametro_peca: Number(orcamento_diametro_peca[i]),
                            orcamento_comprimento_peca: Number(orcamento_comprimento_peca[i]), 
                            orcamento_id_unidade: orcamento_id_unidade[i],
                            orcamento_camada_peca: Number(orcamento_camada_peca[i]),
                            orcamento_fator_x: Number(orcamento_fator_x[i]), 
                            orcamento_valor_total,
                            orcamento_descricao_id_orcamento
                    })
            .into('orcamento_descricao')
        }


        }catch(e){
            console.log(e)
        }

}

module.exports = orcamento_cliente