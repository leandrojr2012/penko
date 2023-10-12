const db = require('../../db/dataBase')


exports.dados_cliente = async (req, res) => {

    const Cliente = req.params.cliente

    const rows_cliente = await db.select('idcliente', 'cliente_nome_fantasia')
                                 .from('cliente')
                                 .where({idcliente: Cliente})

    res.send({Cliente, rows_cliente})
}