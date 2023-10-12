const db = require('../../db/dataBase')
const despesa_fixa_cadastro_service = require('../../service/despesa/despesa_cadastro_fixa')
const despesa_fixa_adicionar_service = require('../../service/despesa/despesa_adicionar_fixa')
const despesa_variavel_cadastro_service = require('../../service/despesa/despesa_cadastrar_variavel')
const despesa_variavel_adicionar_service = require('../../service/despesa/despesa_adicionar_variavel')

exports.despesas = (req, res) =>{
    res.render('despesas/despesas')    
}

//DESPESAS FIXAS
exports.despesas_fixas = (req, res) =>{
    res.render('despesas/despesas_fixas.ejs')
}

exports.despesas_fixas_cadastrar = (req, res) =>{
    res.render('despesas/despesas_fixas_cadastrar.ejs')
}

exports.despesas_fixas_adicionar = async (req, res) =>{

    const rows = await db.select('despesa_fixa_nome', 'iddespesa_fixa').from('despesa_fixa')

     res.render('despesas/despesas_fixas_adicionar.ejs', {rows})
}

exports.despesas_fixas_visualizar = async (req, res) =>{

    const rows = await db.select('despesa_fixa_nome', 'despesa_fixa_tipo').from('despesa_fixa')

    res.render('despesas/despesas_fixas_visualizar.ejs', {rows})
}

//DESPESAS VARIAVEIS
exports.despesas_variaveis = (req, res) =>{
    res.render('despesas/despesas_variaveis.ejs')
}

exports.despesas_variaveis_cadastrar = (req, res) =>{
    res.render('despesas/despesas_variaveis_cadastrar.ejs')
}

exports.despesas_variaveis_adicionar = async (req, res) =>{

    const rows = await db.select('iddespesa_variavel_cad', 'despesa_variavel_cad_nome').from('despesa_variavel_cadastrar')
     res.render('despesas/despesas_variaveis_adicionar.ejs', {rows})
}

exports.despesas_variaveis_visualizar = async (req, res) =>{

    const rows = await db.select('despesa_variavel_cad_nome', 'despesa_variavel_cad_tipo'). from('despesa_variavel_cadastrar')
    res.render('despesas/despesas_variaveis_visualizar.ejs', {rows})
}

//DESPESAS FISCAIS
exports.despesa_fiscais = (req, res) =>{
    res.render('despesas/despesas_fiscais')
}

exports.despesas_fiscais_cadastrar = (req, res) =>{
    res.render('despesas/despesas_fiscais_cadastrar.ejs')
}

exports.despesas_fiscais_adicionar = (req, res) =>{
     res.render('despesas/despesas_fiscais_adicionar.ejs')
}

exports.despesas_fiscais_visualizar = (req, res) =>{
    res.render('despesas/despesas_fiscais_visualizar.ejs')
}

//ROTA POST 

//CONTROLLERS POST DESPESA FIXA 

exports.despesas_fixas_cadastrar_service = (req, res) =>{

    const dados = req.body
    const despesa_fixa_nome = dados.nome_despesa_fixa
    const despesa_fixa_tipo = dados.tipo_despesa_fixa

    despesa_fixa_cadastro_service(despesa_fixa_nome, despesa_fixa_tipo)
    .then(()=>{
        return res.redirect('/home') 
    }).catch((erros) => {console.log(erros)
        //error_msg = erros
        return res.redirect('/home/despesas')
    })
}

exports.despesas_fixas_adicionar_service = (req, res) =>{

    const dados = req.body
    const despesa_fixa_adicionar_iddespesa_fixa = dados.despesa_fixa_nome
    const despesa_fixa_adicionar_valor = dados.despesa_fixa_valor
    const despesa_fixa_adicionar_data = dados.despesa_fixa_data
    const despesa_fixa_adicionar_obs = dados.despesa_fixa_obs

    console.log('teste id value: ' + despesa_fixa_adicionar_iddespesa_fixa)

    despesa_fixa_adicionar_service(despesa_fixa_adicionar_iddespesa_fixa, 
                                   despesa_fixa_adicionar_valor, 
                                   despesa_fixa_adicionar_data, 
                                   despesa_fixa_adicionar_obs)
    .then(()=>{
        return res.redirect('/home') 
    }).catch((erros) => {console.log(erros)
        //error_msg = erros
        return res.redirect('/home/despesas')
    })

}

// CONTROLLERS POST DESPESA VARIAVEL

exports.despesas_variaveis_cadastrar_service = (req, res) =>{

    const dados = req.body
    const despesa_variavel_cad_nome = dados.nome_despesa_variavel
    const despesa_variavel_cad_tipo = dados.tipo_despesa_variavel

    despesa_variavel_cadastro_service(despesa_variavel_cad_nome, despesa_variavel_cad_tipo)
    .then(()=>{
        return res.redirect('/home') 
    }).catch((erros) => {console.log(erros)
        //error_msg = erros
        return res.redirect('/home/despesas')
    })

}

exports.despesas_variaveis_adicionar_service = (req, res) =>{

    const dados = req.body
    const despesa_variavel_adicionar_iddespesa_variavel_cad = dados.nome_despesa_variavel
    const despesa_variavel_adicionar_valor = dados.valor_despesa_variavel
    const despesa_variavel_adicionar_data = dados.data_despesa_variavel
    const despesa_variavel_adicionar_obs = dados.obs_despesa_variavel

    despesa_variavel_adicionar_service(despesa_variavel_adicionar_iddespesa_variavel_cad,
                                       despesa_variavel_adicionar_valor,
                                       despesa_variavel_adicionar_data,
                                       despesa_variavel_adicionar_obs)
                                       .then(()=>{
                                        return res.redirect('/home') 
                                    }).catch((erros) => {console.log(erros)
                                        //error_msg = erros
                                        return res.redirect('/home/despesas')
                                    })
}


