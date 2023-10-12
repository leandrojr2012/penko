const db = require('../../db/dataBase')

exports.dados_unidade = async (req, res) => {

    const Unidade = req.params.unidade

    const rows_unidade = await db. select('idunidade', 'unidade_tipo_un')
                                             . from ('unidade')
                                             . where ({idunidade: Unidade})

    res.send({Unidade, rows_unidade})
}