const db = require('../../db/dataBase')

exports.dados_status_entrada = async (req, res) => {

    const Status_entrada = req.params.status_entrada

    const rows_status_entrada = await db.select('idstatus_entrada', 'status_entrada_status')
                                        .from('status_entrada')
                                        .where({idstatus_entrada: Status_entrada})

    res.send({Status_entrada, rows_status_entrada})
}