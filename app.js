const express = require('express')
var app = express()
var productService = require('./services/productService')
var port = process.env.PORT || 8080;
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

app.listen(port, () => {
    console.log("Listening")
})
