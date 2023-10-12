const db = require('../../db/dataBase')

exports.dados_servico = async (req, res) => {

    const Servico = req.params.servico

    const rows_servico = await db. select('idservico', 'servico_tipo')
                                           . from ('servico')
                                           . where ({idservico: Servico})

    res.send({Servico, rows_servico})
}