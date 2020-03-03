const mysql = require('mysql');


const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'remotemysql.com',
    user: 'knBlMynuHC',
    password: 'lwYFEwQrKd',
    database: 'knBlMynuHC'
});

module.exports = {
    getAllProducts: (req, res) => {
        var sql = 'SELECT * FROM Product';
        pool.getConnection((err, connection) => {
            if (err) {
                throw err
            }
            connection.query(sql, (err1, result) => {
                console.log(result);

                connection.release();
                if (err) {
                    console.log('##');

                    throw err1;
                }
                res.send(result);
            });
        });
        // return new Promise((resolve, reject) => {
        //     con.query("SELECT * FROM Product", function (err, result) {
        //         if (err) reject(err);
        //         resolve(result);
        //     });
        // })
    },
    // createConnection: () => {
    //     con = mysql.createConnection({
    //         connectionLimit: 10,
    //         host: 'remotemysql.com',
    //         user: 'knBlMynuHC',
    //         password: 'lwYFEwQrKd',
    //         database: 'knBlMynuHC'
    //     });
    //     return new Promise((resolve, reject) => {
    //         con.connect(function (err) {
    //             if (err) {
    //                 console.log(err);
    //                 reject(err, "Some error in connection");
    //             }
    //             console.log("Connected")
    //             resolve("Connected!");
    //         });
    //     })
    //
    // },

    addProduct: (req, res) => {
        console.log(req)
        var {id, label, description} = req.body;

        console.log(id, label, description);
        var sql = `INSERT INTO Product VALUES ("${id}", "${label}", "${description}")`;
        console.log(sql);

        pool.getConnection((err, connection) => {
            if (err) {
                throw err;
            }
            connection.query(sql, (err1, result) => {
                console.log(result);

                connection.release();
                if (err) {
                    console.log('##');

                    throw err1;
                }
                res.send(result);
            });
        });
    }

}
