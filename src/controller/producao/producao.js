const db = require('../../db/dataBase')

exports.producao = async (req, res) => {

    const rows = await db.select('identrada', 'entrada_idcliente', 'entrada_idservico', 
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

    const rows_status = await db.select('status_entrada_status', 'idstatus_entrada')
                         .from('status_entrada')

    const variavel = req.params
    console.log("teste: " + variavel)
    console.log(req.params)

    res.render('producao/producao.ejs', {rows, rows_status})
}