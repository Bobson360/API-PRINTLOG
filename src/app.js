'use strict'

const express = require('express')
const bodyParser = require('body-parser')
//const config = require('./config')
const app = express()
const router = express.Router()

//carregar rotas
const index = require('./routes')
const print = require('./routes/print')
// const customer = require('./routes/customer')
// const order = require('./routes/order-routes')

app.use(bodyParser.json({//define um limite para a requisão em JSON
    limit: '5mb'
}))

app.use(bodyParser.urlencoded({ 
    extended:false 
}))

app.use('/', index)
app.use('/print', print)
// app.use('/customers', customer)
// app.use('/orders', order)

module.exports = app