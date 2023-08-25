const db = require('../../db/dataBase')
const bcryptjs = require('bcryptjs')


async function registrarFuncionario(funcionarioNome, funcionarioSobrenome, funcionarioUsuario, funcionarioRg, funcionarioCpf, funcionarioDataNasc, funcionarioAdmissao, funcionarioDemissao, funcionarioEndereco, funcionarioSalario, funcionarioFuncao, funcionarioSenha, confSenha, funcionarioCondicao){
    return new Promise(async ( resolve, reject) =>{


        if(funcionarioSenha != confSenha){
            reject('Senhas nao conferem!')
            return
        }
        else{   
            const senhas = bcryptjs.hashSync(funcionarioSenha, 8)
            await db.insert({funcionarioNome, funcionarioSobrenome, funcionarioUsuario, funcionarioRg:Number(funcionarioRg), funcionarioCpf:Number(funcionarioCpf), funcionarioDataNasc, funcionarioAdmissao, funcionarioDemissao, funcionarioEndereco, funcionarioSalario:Number(funcionarioSalario), funcionarioFuncao, funcionarioSenha:senhas, funcionarioCondicao})
            .into("funcionario")
            .then (data =>{
                resolve()
            }).catch(err => {
                console.log(err)
            })
        }
    })
}

module.exports = registrarFuncionario