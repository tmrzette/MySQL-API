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

connection.query(`CALL spUsersMentions(${p_userid})`, (err, results, fields) => {
    if(err) {
        connection.end();
        return console.log(err);
    }
    
    results.forEach(item => {
        console.log(item);
    });

    connection.end();
})
