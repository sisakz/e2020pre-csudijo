var express = require('express');
var router = express.Router();
var mysql = require('mysql');

const adatbazisLekerdezes = function (SqlLekerdezes) {
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'csudijo'
  });
  
  connection.connect()
  
  connection.query(SqlLekerdezes, function (err, rows, fields) {
    if (err) throw err
    return rows
  })
  
  connection.end()
}

/* GET forgalom. */
router.get('/forgalom', function(req, res, next) {
  const sqlLekerdezes = "SELECT SUM(etalar*mennyiseg) FROM rendelesek;"
  const forgalom = adatbazisLekerdezes(sqlLekerdezes)
  res.send( JSON.stringify({forgalom: forgalom[0].osszeg}) );
});

/* GET legnepszerubb. */
router.get('/legnepszerubb', function(req, res, next) {
  res.send( JSON.stringify({etelNev: 'LECSÓ KOLBÁSZCSIPSSZEL'}) );
});

module.exports = router;
