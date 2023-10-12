//VARIAVEIS
const express = require('express');
const route = express.Router()
const testecontroller = require('./src/controller/teste/teste')
const acessocontroller = require('./src/controller/acesso/acesso')
const homecontroller = require('./src/controller/home/home')
const registroUsercontroller = require('./src/controller/registroUsuario/registro')
const logincontroller = require('./src/controller/login/login')
const clientecontroller = require('./src/controller/cliente/cliente')
const orcamentocontroller = require('./src/controller/orcamento/orcamento')
const despesascontroller = require('./src/controller/despesas/despesas')
const entradacontroller = require('./src/controller/entrada/entrada')
const producaocontroller = require('./src/controller/producao/producao')
const dados_clientecontroller = require('./src/controller/dados_cliente/dados_cliente')
const dados_servicocontroller = require('./src/controller/dados_servico/dados_servico')
const dados_unidadecontroller = require('./src/controller/dados_unidade/dados_unidade')
const dados_status_entradacontroller = require('./src/controller/dados_status_entrada/dados_status_entrada')
const dados_descricaocontroller = require('./src/controller/dados_descricao/dados_descricao')
const dados_entrada_producao = require('./src/controller/dados_entrada_producao/dados_entrada_producao')

//MIDDLEWARE/SESSION
const eAdmin = require('./src/middleware/acessoAdm')
const eFunc = require('./src/middleware/acesso');

// ********************ROTAS GET*********************

//LOGIN
route.get('/', acessocontroller. acesso) 

//HOME
route.get('/home', eFunc, homecontroller.home)

//REGISTRO
route.get('/home/registro', registroUsercontroller.registroUsuario)

// CLIENTE
route.get('/home/cliente', eAdmin, clientecontroller.cliente )
route.get('/home/cliente/cadastro', eAdmin, clientecontroller.clienteCadastro)
route.get('/home/cliente/lista', eAdmin, clientecontroller.clienteLista)
route.get('/home/cliente/lista/detalhado/:id', eAdmin, clientecontroller.clienteListaVer)

//ORÇAMENTO
route.get('/home/orcamento', eAdmin, orcamentocontroller.orcamento)


//DADOS_
route.get('/home/servico/:servico', eAdmin, dados_servicocontroller.dados_servico)
route.get('/home/descricao/:descricao', eAdmin, dados_descricaocontroller.dados_descricao)
route.get('/home/unidade/:unidade', eAdmin, dados_unidadecontroller.dados_unidade)
route.get('/home/cliente/:cliente', eAdmin, dados_clientecontroller.dados_cliente)
route.get('/home/entrada/status/:status_entrada', eAdmin, dados_status_entradacontroller.dados_status_entrada)
route.get('/home/entradas_producao/:search', eAdmin, dados_entrada_producao.dados_entrada_producao)

//DESPESAS
route.get('/home/despesas', eAdmin, despesascontroller.despesas)
route.get('/home/despesas/despesas_variaveis', eAdmin, despesascontroller.despesas_variaveis)
route.get('/home/despesas/despesas_variaveis/visualizar_despesa_variavel', eAdmin, despesascontroller.despesas_variaveis_visualizar)
route.get('/home/despesas/despesas_variaveis/adicionar_despesa_variavel', eAdmin, despesascontroller.despesas_variaveis_adicionar)
route.get('/home/despesas/despesas_variaveis/cadastro_despesa_variavel', eAdmin, despesascontroller.despesas_variaveis_cadastrar)
route.get('/home/despesas/despesas_fixas', eAdmin, despesascontroller.despesas_fixas)
route.get('/home/despesas/despesas_fixas/visualizar_despesa_fixa', eAdmin, despesascontroller.despesas_fixas_visualizar)
route.get('/home/despesas/despesas_fixas/adicionar_despesa_fixa', eAdmin, despesascontroller.despesas_fixas_adicionar)
route.get('/home/despesas/despesas_fixas/cadastro_despesa_fixa', eAdmin, despesascontroller.despesas_fixas_cadastrar)
route.get('/home/despesas/despesas_fiscais', eAdmin, despesascontroller.despesa_fiscais)
route.get('/home/despesas/despesas_fiscais/cadastro_despesa_fiscal', eAdmin, despesascontroller.despesas_fiscais_cadastrar)
route.get('/home/despesas/despesas_fiscais/adicionar_despesa_fiscal', eAdmin, despesascontroller.despesas_fiscais_adicionar)
route.get('/home/despesas/despesas_fiscais/visualizar_despesa_fiscal', eAdmin, despesascontroller.despesas_fiscais_visualizar)

//ENTRADA
route.get('/home/entrada', eFunc, eAdmin, entradacontroller.entrada)

//PRODUÇÃO
route.get('/home/producao', eAdmin, eFunc, producaocontroller.producao)


// ******************ROTAS POST*********************

//TESTE4
route.put('/teste', testecontroller.testeservice)

// POST/REGISTRO
route.post('/registroservice', registroUsercontroller.registroservice)

//POST/LOGIN
route.post('/loginservice', logincontroller.loginservice)

//POST/CLIENTE
route.post('/cadastro_cliente_service', clientecontroller.cadastro_cliente_service)

//POST/ORCAMENTO
route.post('/orcamento_service', orcamentocontroller.orcamento_service)

//POST/DESPESA
route.post('/despesas_fixas_cadastrar_service', despesascontroller.despesas_fixas_cadastrar_service)
route.post('/despesas_fixas_adicionar_service', despesascontroller.despesas_fixas_adicionar_service)
route.post('/despesas_variaveis_cadastrar_service', despesascontroller.despesas_variaveis_cadastrar_service)
route.post('/despesas_variaveis_adicionar_service', despesascontroller.despesas_variaveis_adicionar_service)

//POST/ENTRADA
route.post('/entrada_service', entradacontroller.entrada_service)


//EXPORTAÇÃO
module.exports = route
