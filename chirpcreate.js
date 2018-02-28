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

let chirp = { userid: 1, message: 'This is my first created chirp!', location: 'Australia' };

connection.query('INSERT INTO Chirps SET ?', chirp, (err, results, fields) => {
    if(err) {
        connection.end();
        return console.log(err);
    }
    console.log(results);

    connection.end();
});

app.use.connection.query()