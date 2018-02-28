let express = require('express');
let mysql = require('mysql');
let mysqlrestapi  = require('mysql-restapi');
let dbconfig = require('./connections');
let app = express();
let api = mysqlrestapi(app, dbconfig);
const express = require('express');
let router = express.Router();



let connection = mysql.createConnection(
    {
        host: 'localhost',
        database: 'inclassexample',
        user: 'chirpuserapp',
        password: 'blahblah'
    }

);

connect.connection();

router.get('/', (req, res, next) => {

});

router.post('/mentions', (req, res, next) => {
    
});

router.put('/', (req, res, next) => {
    
});

router.delete('/mentions/:id', (req, res, next) => {
    
});