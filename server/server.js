var mysql = require("mysql");

app.use(function(req, res, next){
    res.locals.connection = mysql.createConnection({
        host: 'localhost',
        database: 'inclassexample',
        user: 'chirpuserapp',
        password: 'blahblah'
    });

    res.locals.connect();
    next();

});
app.use('/', index)
app.use('/api/chirpr/chirps', chirps);

router.get('/', function(req, res, next) {
    res.locals.connection.query('SELECT * from Chirps', function (error, results, fields) {
        if (err) throw error;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});