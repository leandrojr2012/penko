const db = require('../../db/dataBase')
const orcamento_cliente = require('../../service/orcamento/orcamento_cliente')

exports.orcamento = async (req, res) =>{
    const rows_cliente = await db.select('cliente_nome_fantasia', 'idcliente')
                                 .from('cliente')

    const rows_descricao = await db.select('idcliente_desc_peca', 'cliente_desc_pc_descricao')
                                   .from('cliente_desc_peca')

    const rows_unidade = await db.select('idunidade', 'unidade_tipo_un')
                   .from('unidade')

    const rows_servico = await db.select('idservico', 'servico_tipo')
                   .from('servico')

    const rows_numero_pedido = await db.raw('select count(*) as numero from(orcamento)')
   
    res.render('orcamento/orcamento.ejs', {rows_cliente, rows_descricao, rows_unidade, rows_servico, rows_numero_pedido})
}

exports.orcamento_service = (req, res) =>{

    const dados = req.body
    const orcamento_id_cliente = dados.cliente
    const orcamento_id_servico = dados.arrayservico
    const orcamento_id_cliente_desc_peca = dados.arraydescricao
    const orcamento_diametro_peca = dados.arraydiametro
    const orcamento_comprimento_peca = dados.arraycomprimento
    const orcamento_id_unidade = dados.arrayunidade
    const orcamento_camada_peca = dados.arraycamada
    const orcamento_fator_x = dados.arrayfatorx
    const orcamento_valor_uni = dados.arrayvalorunit
    const orcamento_subtotal = dados.arraysubtotal
    const orcamento_frete = dados.frete
    const orcamento_frete_valor = dados.fretevalor
    const orcamento_pagamento = dados.pagamento
    const orcamento_pg_forma_parcelado = dados.pagamento_forma_parcelado
    const orcamento_prazo_entrega = dados.prazo_entrega
    const orcamento_desconto = dados.desconto
    const orcamento_valor_total = dados.totalinp
    const orcamento_descricao_id_orcamento = dados.numero_pedido
    

    //console.log(JSON.stringify(req.body, null, 4))

    orcamento_cliente(orcamento_id_cliente, orcamento_id_servico, orcamento_id_cliente_desc_peca,
        orcamento_diametro_peca, orcamento_comprimento_peca, orcamento_id_unidade, 
        orcamento_camada_peca, orcamento_fator_x, orcamento_valor_uni, orcamento_subtotal, 
        orcamento_valor_total, orcamento_descricao_id_orcamento,
        orcamento_frete, orcamento_frete_valor, orcamento_pagamento, 
        orcamento_pg_forma_parcelado, orcamento_prazo_entrega, 
        orcamento_desconto)
    .then(()=>{
        return res.redirect('/home') 
    }).catch((erros) => {console.log(erros)
        //error_msg = erros
        return res.redirect('/home/orcamento')
    })
}