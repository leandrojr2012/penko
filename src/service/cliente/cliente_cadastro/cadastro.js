const db = require('../../../db/dataBase')

async function clienteCadastroService(cliente_nome_fantasia, cliente_razao_social, cliente_cnpj, cliente_insc_estadual,
    cliente_endereço, cliente_cidade, cliente_bairro, cliente_cep, cliente_uf,
    cliente_cont_cel, cliente_cont_whats, cliente_cont_fixo, cliente_email,
    cliente_nome_resp, cliente_cargo, cliente_obs){

    try{
            await db.insert({cliente_nome_fantasia, cliente_razao_social, cliente_cnpj, cliente_insc_estadual,
                cliente_endereço, cliente_cidade, cliente_bairro, cliente_cep, cliente_uf,
                cliente_cont_cel, cliente_cont_whats, cliente_cont_fixo, cliente_email,
                cliente_nome_resp, cliente_cargo, cliente_obs})
            .into("cliente")

        }catch(e){
            console.log(e)
        }

}

module.exports = clienteCadastroService