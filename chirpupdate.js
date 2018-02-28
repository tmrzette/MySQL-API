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

connection.query('UPDATE Chirps SET location = ? Where ID = ?', ['South Africa', 1 ], (err, result) => {
    if (err) {
    connection.end();
    console.log(err);
  };

  results.forEach(item => {
      console.log(item);
      console.log(`Changed ${item} row(s)`);
  });

});