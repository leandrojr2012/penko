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

exports.orcamento_servico = async (req, res) => {

    const tipo_servico = req.params.tipo_servico

    const rows_orcamento_servico = await db. select('idservico', 'servico_tipo')
                                           . from ('servico')
                                           . where ({idservico: tipo_servico})

    res.send({tipo_servico, rows_orcamento_servico})
}

exports.orcamento_descricao = async (req, res) => {

    const tipo_descricao = req.params.tipo_descricao

    const rows_orcamento_descricao = await db. select('idcliente_desc_peca', 'cliente_desc_pc_descricao')
                                             . from ('cliente_desc_peca')
                                             . where ({idcliente_desc_peca: tipo_descricao})

    res.send({tipo_descricao, rows_orcamento_descricao})
}

exports.orcamento_unidade = async (req, res) => {

    const tipo_unidade = req.params.tipo_unidade

    const rows_orcamento_unidade = await db. select('idunidade', 'unidade_tipo_un')
                                             . from ('unidade')
                                             . where ({idunidade: tipo_unidade})

    res.send({tipo_unidade, rows_orcamento_unidade})
}

exports.orcamento_service = (req, res) =>{

    const dados = req.body
    const orcamento_id_cliente = dados.tipo_cliente
    const orcamento_id_servico = dados.servico
    const orcamento_id_cliente_desc_peca = dados.descricao
    const orcamento_diametro_peca = dados.diametro
    const orcamento_comprimento_peca = dados.comprimento
    const orcamento_id_unidade = dados. unidade
    const orcamento_camada_peca = dados.camada
    const orcamento_fator_x = dados.fatorx
    const orcamento_frete = dados.frete
    const orcamento_frete_valor = dados.fretevalor
    const orcamento_pagamento = dados.pagamento
    const orcamento_pg_forma_parcelado = dados.pagamento_forma_parcelado
    const orcamento_prazo_entrega = dados.prazo_entrega
    const orcamento_desconto = dados.desconto
    const orcamento_valor_total = dados.totalinp
    const orcamento_descricao_id_orcamento = dados.numero_pedido
    console.log('teste req.body: ' + dados)
    console.log('teste dados diametro: ' + orcamento_diametro_peca)

    orcamento_cliente(orcamento_id_cliente, orcamento_id_servico, orcamento_id_cliente_desc_peca,
        orcamento_diametro_peca, orcamento_comprimento_peca, orcamento_id_unidade, 
        orcamento_camada_peca, orcamento_fator_x, orcamento_valor_total, orcamento_descricao_id_orcamento,
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