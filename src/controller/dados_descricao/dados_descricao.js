const db = require('../../db/dataBase')

exports.dados_descricao = async (req, res) => {

    const Descricao = req.params.descricao

    const rows_descricao = await db. select('idcliente_desc_peca', 'cliente_desc_pc_descricao')
                                             . from ('cliente_desc_peca')
                                             . where ({idcliente_desc_peca: Descricao})

    res.send({Descricao, rows_descricao})
}