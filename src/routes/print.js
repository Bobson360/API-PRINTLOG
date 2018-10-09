'use strict'

const express = require('express')
const screenshot = require('desktop-screenshot')
const router = express.Router()

const path = require('path');
const fs = require('fs');

const route = router.get('/', (req, res, next) => {

   
 
//concatenando diretorio atual com a pasta dos arquivos
var directoryPath = path.join(__dirname, '../img');
 
//lendo o diretorio
var files = fs.readdirSync(directoryPath);
const page = files.length + 1
 console.log(Date.now())
    console.log('printando tela')
    screenshot(`./src/img/page_${page === 0 ? 1 : page}.png`, function (error, complete) {
        if (error)
            console.log("Screenshot failed", error)
        else
            console.log("Screenshot succeeded")
            
    })

    res.status(200).send('Print Ok')
})

module.exports = router