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

connection.query(
    'DELETE FROM Chirps WHERE id = ?', [1], (err, result) => {
      if (err) {
      connection.end();
      console.log(err);
    }

    //results.forEach(item => {
    //    console.log(item);
    //    console.log(`Deleted ${result} row(s)`);
    //});

});
