const db = require('../../db/dataBase')
const clienteCadastroService = require('../../service/cliente/cliente_cadastro/cadastro')

exports.cliente = (req, res) => {
    res.render('cliente/cliente.ejs')
}

exports.clienteCadastro = (req, res) => {
    res.render('cliente/clienteCadastro.ejs')
}

exports.clienteLista = async (req, res) => {

    const rows = await db.select('idcliente', 'cliente_nome_fantasia', 'cliente_razao_social', 'cliente_cnpj', 'cliente_email')
                         .from('cliente')

    res.render('cliente/clienteLista.ejs', {rows})
}

exports.clienteListaVer = async (req, res) => {

    const rows = await db.select ('cliente_nome_fantasia', 'cliente_razao_social', 'cliente_cnpj',
                                  'cliente_insc_estadual', 'cliente_endereço', 'cliente_cidade',
                                  'cliente_bairro', 'cliente_cep', 'cliente_uf', 'cliente_cont_cel',
                                  'cliente_cont_whats', 'cliente_cont_fixo', 'cliente_email',
                                  'cliente_nome_resp', 'cliente_cargo', 'cliente_obs')
                         .from('cliente')
                         .where({'idcliente':req.params.id})
                
    const idUrl = req.params.id

    res.render('cliente/clienteListaDetalhado.ejs', {idUrl, rows})

}


//POST

exports.cadastro_cliente_service = (req, res) => {

    const dados = req.body
    const cliente_nome_fantasia = dados.nome_fantasia
    const cliente_razao_social = dados.razao_social
    const cliente_cnpj = dados.cnpj
    const cliente_insc_estadual = dados.i_e
    const cliente_endereço = dados.endereço
    const cliente_cidade = dados.cidade
    const cliente_bairro = dados.bairro
    const cliente_cep = dados.cep
    const cliente_uf = dados.uf
    const cliente_cont_cel = dados.cont_cel
    const cliente_cont_whats = dados.cont_whats
    const cliente_cont_fixo = dados.cont_fixo
    const cliente_email = dados.email
    const cliente_nome_resp = dados.nome_resp
    const cliente_cargo = dados.cargo
    const cliente_obs = dados.obs

    clienteCadastroService(cliente_nome_fantasia, cliente_razao_social, cliente_cnpj, cliente_insc_estadual,
                           cliente_endereço, cliente_cidade, cliente_bairro, cliente_cep, cliente_uf,
                           cliente_cont_cel, cliente_cont_whats, cliente_cont_fixo, cliente_email,
                           cliente_nome_resp, cliente_cargo, cliente_obs)
    .then(()=>{
        return res.redirect('/home') 
    }).catch((erros) => {console.log(erros)
        //error_msg = erros
        return res.redirect('/home/clienteCadastro')
    })

}