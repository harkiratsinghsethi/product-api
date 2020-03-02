const express = require('express')
var app = express()
app.all('*', function(req, res, next) {
    var origin = req.get('origin');
    res.header('Access-Control-Allow-Origin', origin);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
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

app.post('/api/add-product', (req, res) => {
    console.log(req.body)
    var {id, label, description} = req.body;
    productService.createConnection().then((log) => {
        return productService.addProduct(id, label, description)
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
