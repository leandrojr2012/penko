const db = require('../../db/dataBase')
const eAdmin = require('../../middleware/acessoAdm')

exports.producao = async (req, res) => {

    const dados = req.query

    const { pagina = 1 }  = dados

    const { pg_anterior } =  dados

    const { pg_posterior } = dados

    let limite = 10
    
    let contagem_dados = await db.count('*', {as: 'count'})
                                .from('entrada')
                                .join('cliente', {'entrada_idcliente': 'idcliente'})
                                .join('servico', {'entrada_idservico': 'idservico'})
                                .join('entrada_descricao', {'identrada': 'entrada_desc_identrada'})
                                .join('cliente_desc_peca', {'entrada_desc_idcliente_desc_peca': 'idcliente_desc_peca'})
                                .join('entrada_status_descricao', {'identrada': 'entrada_status_desc_identrada'})
                                .join('status_entrada', {'entrada_status_desc_idstatus_entrada': 'idstatus_entrada'})
                                .where({entrada_status_desc_ativo:1})

    let sql = db.select('identrada', 'entrada_idcliente', 'entrada_idservico', 'entrada_data',
                                 'entrada_desc_idcliente_desc_peca', 'entrada_desc_diametro',
                                 'entrada_desc_comprimento', 'entrada_status_desc_idstatus_entrada',
                                 'cliente_nome_fantasia', 'servico_tipo', 'cliente_desc_pc_descricao',
                                 'status_entrada_status', 'identrada_status_descricao') 
                                .from('entrada')
                                .join('cliente', {'entrada_idcliente': 'idcliente'})
                                .join('servico', {'entrada_idservico': 'idservico'})
                                .join('entrada_descricao', {'identrada': 'entrada_desc_identrada'})
                                .join('cliente_desc_peca', {'entrada_desc_idcliente_desc_peca': 'idcliente_desc_peca'})
                                .join('entrada_status_descricao', {'identrada': 'entrada_status_desc_identrada'})
                                .join('status_entrada', {'entrada_status_desc_idstatus_entrada': 'idstatus_entrada'})
                                .where({entrada_status_desc_ativo:1})
                                .offset((pagina * limite) - limite)
                                .limit(limite)
                                .orderBy('identrada')

    //let usuario = db.select('funcionarioCondicao').from('funcionario')  UTILIZAR O LOGIN DO USUARIO PARA MONTAR O IF NO FRONTj



    const rows_status = await db.select('status_entrada_status', 'idstatus_entrada')
                                .from('status_entrada')

    const rows_cliente = await db.select('idcliente', 'cliente_nome_fantasia')
                                 .from('cliente')

   
    let qnt_pg = Math.ceil(contagem_dados[0].count / limite)

    let count_front = contagem_dados[0].count

    if(pg_anterior >= 1){
        sql = sql.offset((pg_anterior * limite) - limite)
    }

    if(pg_posterior){
        sql = sql.offset((pg_posterior * limite) - limite)
    }

    
// MENU DE FILTRAGEM

    const search = dados.input_search
    const clientes = dados.cliente
    const status_prod = dados.status

    if( search ){
        sql = sql.where({identrada: search})
    }
    if( clientes ){
        sql = sql.where({idcliente : clientes})
    }
    if( status_prod ){
        sql = sql.where({idstatus_entrada : status_prod})
    }

    const rows = await sql 
           

    res.render('producao/producao.ejs', {rows, rows_status, rows_cliente, pagina, qnt_pg, count_front})
}

exports.producao_retorna_dados = async (req, res) =>{

    const id = req.params.id

    const sql = await db.select('entrada_idcliente', 'entrada_idservico', 'entrada_data',
                            'entrada_desc_idcliente_desc_peca', 'entrada_desc_diametro',
                            'entrada_desc_comprimento', 'entrada_status_desc_idstatus_entrada',
                            'cliente_nome_fantasia', 'cliente_cnpj', 'cliente_razao_social',
                            'cliente_cont_whats', 'servico_tipo', 'cliente_desc_pc_descricao',
                            'status_entrada_status', 'identrada_status_descricao', 'entrada_valor',
                            'entrada_forma_pagamento', 'entrada_desc_observacao')
                        .from('entrada')
                        .join('cliente', {'entrada_idcliente': 'idcliente'})
                        .join('servico', {'entrada_idservico': 'idservico'})
                        .join('entrada_descricao', {'identrada': 'entrada_desc_identrada'})
                        .join('cliente_desc_peca', {'entrada_desc_idcliente_desc_peca': 'idcliente_desc_peca'})
                        .join('entrada_status_descricao', {'identrada': 'entrada_status_desc_identrada'})
                        .join('status_entrada', {'entrada_status_desc_idstatus_entrada': 'idstatus_entrada'})
                        .where({entrada_status_desc_ativo:1})
                        .andWhere({identrada: id})

    res.send({sql})
    
}