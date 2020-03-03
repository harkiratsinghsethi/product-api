// const express = require('express')
// var app = express()
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());
// app.all('*', function (req, res, next) {
//     var origin = req.get('origin');
//     res.header('Access-Control-Allow-Origin', origin);
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });
// var productService = require('./services/productService');
// conn = productService.createConnection();
// var port = process.env.PORT || 3004;
// app.get('/api/get-products', (req, res) => {
//     productService.createConnection().then((log) => {
//         return productService.getAllProducts()
//     }, (log) => {
//         console.log(log);
//         res.send("Error")
//     })
//         .then((result) => {
//             res.send(result)
//         })
// });
//
// app.post('/api/add-product', (req, res) => {
//     console.log(req.body);
//     var {id, label, description} = req.body;
//     productService.createConnection().then((log) => {
//         return productService.addProduct(id, label, description)
//     }, (log) => {
//         console.log(log);
//         res.send("Error")
//     })
//         .then((result) => {
//             res.send(result)
//         })
// })
//
// app.listen(port, () => {
//     console.log("Listening at " + port)
// })
// let cors = require('cors');


let express = require('express');
bodyParser = require('body-parser');

app = express();
app.all('*', function (req, res, next) {
    var origin = req.get('origin');
    res.header('Access-Control-Allow-Origin', origin);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
port = process.env.PORT || 3005;
let api = require('./routes/routes');
// app.use(allowCrossDomain);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', api);
app.listen(port);
console.log('RESTful API server started on: ' + port);
