var mysql = require('mysql');
var con;

module.exports = {
    getAllProducts: () => {
        return new Promise((resolve, reject) => {
            con.query("SELECT * FROM Product", function (err, result) {
                if (err) reject(err);
                resolve(result);
              });
        })
    },
    createConnection: () => {
        con = mysql.createConnection({
            connectionLimit: 10,
            host: 'remotemysql.com',
            user: 'knBlMynuHC',
            password: 'lwYFEwQrKd',
            database: 'knBlMynuHC'
        });
        return new Promise((resolve, reject) => {
            con.connect(function(err) {
                if (err) reject("Some error in connection");
                resolve("Connected!");
            });
        })
        
    }

}