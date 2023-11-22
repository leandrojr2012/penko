const db = require('../../db/dataBase')
const entrada_cliente = require('../../service/entrada/entrada_cliente')


exports.entrada = async (req, res) => {

    const rows_cliente = await db.select('cliente_nome_fantasia', 'idcliente'). from('cliente')
    const rows_servico = await db.select('idservico', 'servico_tipo').from('servico')
    const rows_descricao = await db.select('idcliente_desc_peca', 'cliente_desc_pc_descricao').from('cliente_desc_peca')
    const rows_status = await db.select('idstatus_entrada', 'status_entrada_status').from('status_entrada')
    const rows_numero_entrada = await db.raw('select count(*) as numero from(entrada)')
    const rows_pagamento = await db.select('idforma_pagamento', 'forma_pagamento_tipo', 'forma_pagamento_valor').from('forma_pagamento')


    res.render('entrada/entrada.ejs', {rows_cliente, rows_servico, rows_descricao, rows_status, rows_numero_entrada, rows_pagamento})

}

exports.entrada_service = (req, res) =>{

    const dados = req.body

    const entrada_idcliente = dados.cliente
    const entrada_idservico = dados.servico
    const entrada_valor = dados.entrada_valor
    const entrada_desc_identrada = dados.numero_entrada
    const entrada_desc_idcliente_desc_peca = dados.descricao
    const entrada_desc_diametro = dados.entrada_diametro
    const entrada_desc_comprimento = dados.entrada_comprimento
    const entrada_status_desc_idstatus_entrada = dados.status_entrada
    const entrada_status_desc_identrada = dados.numero_entrada
    const entrada_forma_pagamento = dados.pagamento
    const entrada_desc_observacao = dados.observacao
    console.log('teste entrada id: ' + entrada_desc_identrada)
    
    entrada_cliente(entrada_idcliente, entrada_idservico, entrada_valor, 
                    entrada_desc_identrada, entrada_desc_idcliente_desc_peca,
                    entrada_desc_diametro, entrada_desc_comprimento, entrada_status_desc_idstatus_entrada,
                    entrada_status_desc_identrada, entrada_forma_pagamento, entrada_desc_observacao)
    .then(()=>{
        return res.redirect('/home/entrada') 
    }).catch((erros) => {console.log(erros)
        //error_msg = erros
        return res.redirect('/home/orcamento')
    })

}