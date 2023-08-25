const express = require('express');
const route = express.Router()
const acessocontroller = require('./src/controller/acesso/acesso')
const homecontroller = require('./src/controller/home/home')
const registroUsercontroller = require('./src/controller/registroUsuario/registro')
const logincontroller = require('./src/controller/login/login')
const clientecontroller = require('./src/controller/cliente/cliente')
const orcamentocontroller = require('./src/controller/orcamento/orcamento')

const eAdmin = require('./src/middleware/acessoAdm')
const eFunc = require('./src/middleware/acesso');

// ROTAS GET

route.get('/', acessocontroller. acesso)    
route.get('/home', eFunc, homecontroller.home)
route.get('/home/registro', registroUsercontroller.registroUsuario)
route.get('/home/cliente', eAdmin, clientecontroller.cliente )
route.get('/home/cliente/cadastro', eAdmin, clientecontroller.clienteCadastro)
route.get('/home/cliente/lista', eAdmin, clientecontroller.clienteLista)
route.get('/home/cliente/lista/detalhado/:id', eAdmin, clientecontroller.clienteListaVer)
route.get('/home/orcamento', eAdmin, orcamentocontroller.orcamento)
route.get('/home/orcamento/servico/:tipo_servico', eAdmin, orcamentocontroller.orcamento_servico)
route.get('/home/orcamento/descricao/:tipo_descricao', eAdmin, orcamentocontroller.orcamento_descricao)
route.get('/home/orcamento/unidade/:tipo_unidade', eAdmin, orcamentocontroller.orcamento_unidade)

// ROTAS POST

route.post('/registroservice', registroUsercontroller.registroservice)
route.post('/loginservice', logincontroller.loginservice)
route.post('/cadastro_cliente_service', clientecontroller.cadastro_cliente_service)
route.post('/orcamento_service', orcamentocontroller.orcamento_service)

//

module.exports = route
