const db = require('../../db/dataBase')

exports.dados_entrada_producao = async (req, res) => {

    const Search = req.params.search

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

                         .where({identrada:Search})
                         .andwhere({entrada_status_desc_ativo:1})

    res.send({rows, Search})

}