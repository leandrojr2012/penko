const update_status = require('../../service/teste/teste')

    exports.testeservice = (req, res) => {

        const dados = req.body

        const entrada_status_desc_idstatus_entrada = dados.new_status
        const entrada_status_desc_identrada = dados.ido_s

        console.log('teste beck/ status: ' + entrada_status_desc_idstatus_entrada + ' id: ' + entrada_status_desc_identrada)
        
        update_status(entrada_status_desc_idstatus_entrada, entrada_status_desc_identrada)
        .then((dados)=>{
            res.json(dados)
        }).catch((erros) => {console.log(erros)
            //error_msg = erros
            res.status(400)
            res.end()
        })
        
    }