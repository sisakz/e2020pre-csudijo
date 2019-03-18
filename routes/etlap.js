var express = require('express');
var router = express.Router();

/* GET etlap. */
router.get('/etlap', function(req, res, next) {
  res.send('etlap');
});

/* GET etlap. */
router.get('/legnepszerubb', function(req, res, next) {
  res.send( JSON.stringify({etelNev: 'LECSÓ KOLBÁSZCSIPSSZEL'}) );
});

module.exports = router;
