import { port } from '_debugger';

var express = require('express');
var mysql = require('mysql');
var mysqlrestapi  = require('mysql-restapi');
var dbconfig = require('./connections');
var app = express();
var api = mysqlrestapi(app, dbconfig);



let connection = mysql.createConnection(
    {
        host: 'localhost',
        database: 'inclassexample',
        user: 'chirpuserapp',
        password: 'blahblah'
    }

);

connect.connection();

var corsOptions = {
    origin: "*",
    methods: "GET, POST, PUT, DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
    allowedHeaders: "Content-Type",
    credentials: true
};



app.use('/', index)
app.use('/api/chirpr/chirps', chirps);

router.get('/', function(req, res, next) {
    res.locals.connection.query('SELECT * from Chirps', function (error, results, fields) {
        if (err) throw error;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

app.listen(3000);

module.exports={connection, settingOptions, corsOptions};