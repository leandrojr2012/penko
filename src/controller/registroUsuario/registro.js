const registrarFuncionario = require('../../service/registroUsuario/registro')

exports.registroUsuario = (req, res) => {
    res.render('registroUsuario')
}

exports.registroservice = (req, res) => {
    const dados = req.body
    const funcionarioNome = dados.nome
    const funcionarioSobrenome = dados.sobrenome
    const funcionarioUsuario = dados.usuario
    const funcionarioRg = dados.rg
    const funcionarioCpf = dados.cpf
    const funcionarioDataNasc = dados.nascimento
    const funcionarioAdmissao = dados.admissao
    const funcionarioDemissao = dados.demissao
    const funcionarioEndereco = dados.endereco
    const funcionarioSalario = dados.salario
    const funcionarioFuncao = dados.funcao
    const funcionarioSenha = dados.senha
    const confSenha = dados.confirmarsenha
    const funcionarioCondicao = dados.condicao

    registrarFuncionario(funcionarioNome, funcionarioSobrenome, funcionarioUsuario, funcionarioRg, funcionarioCpf, funcionarioDataNasc, funcionarioAdmissao, funcionarioDemissao, funcionarioEndereco, funcionarioSalario, funcionarioFuncao, funcionarioSenha, confSenha, funcionarioCondicao)
    .then(()=>{
        return res.redirect('/home') 
    }).catch((erros) => {console.log(erros)
        //error_msg = erros
        return res.redirect('/home/registro')
    })
}