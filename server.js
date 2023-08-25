const express = require('express')
const app = express()
const port = 8080
const path = require('path')
const route = require('./routes')
const session = require('express-session')

app.use(session({
  secret:"leandroSession",
  name: 'uniqueSessionID',
  resave: true,
  saveUninitialized: false,
}))

app.use(express.urlencoded({extended:true}))
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(route)

app.listen(port, ()=>{
    console.log('Servidor Rodando na porta: ' + port + ' => http://localhost:8080')
})