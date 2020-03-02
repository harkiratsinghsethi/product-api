const express = require('express')
var app = express()
var productService = require('./services/productService')

app.get('/api/get-products', (req, res) => {
    productService.createConnection().then((log) => {
        return productService.getAllProducts()
    }, (log) => {
        console.log(log)
        res.send("Error")
    })
    .then((result) => {
        res.send(result)
    })
})

app.listen(4000, () => {
    console.log("Listening")
})