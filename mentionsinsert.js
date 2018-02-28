const mysql = require('mysql')

let connection = mysql.createConnection(
    {
        host: 'localhost',
        database: 'inclassexample',
        user: 'chirpuserapp',
        password: 'blahblah'
    }

);

connection.connect();

let mention = { userid: 1, chirpid: 1 };

connection.query('INSERT INTO Mentions SET ?', mention, (err, results, fields) => {
    if(err) {
        connection.end();
        return console.log(err);
    }
    console.log(results);

    connection.end();
});