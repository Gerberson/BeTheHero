//importar o express
const express = require('express')
const cors = require('cors')
const routes = require('./routes')

//iniciar o app
const app = express()

//define quais aplicações vão acessar
app.use(cors())

//para converter o json para objeto e deve estar acima das rotas
app.use(express.json())

//sempre abaixo do express.json
app.use(routes)

//configurar rota
app.listen(3333)