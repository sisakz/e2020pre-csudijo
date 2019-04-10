var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var db = {
  host: 'localhost',
  user: 'admin',
  password: 'Szivarvany21',
  database: 'csudijo'
}
const getSqlTasks = require('../assets/sqlTasks')

const databaseQuery = sqlQuery => {
  return new Promise((resolve, reject) => {
	const connection = mysql.createConnection(db)
	connection.connect()
	console.log('sqlQuery', sqlQuery)
	connection.query(sqlQuery, (error, lines, fields) => {
	  if (error) reject(error)
	  resolve(lines)
	})
  })
}

/* fech data from database */
router.get('/lekerdezes/:id', function (req, res, next) {
  getSqlTasks().then(result => {
	const sqlTasks = result
	console.log('sqlTasks', sqlTasks)
	const sqlTaskById = sqlTasks.filter(task => task.id == req.params.id)

	if (sqlTaskById) {
	  sqlTask = sqlTaskById[0]
	  if (sqlTask.sql) {
		  databaseQuery(sqlTask.sql)
		  .then(result => {
			res.send(JSON.stringify(result))
		  })
		  .catch(error => {
			res.status(error.status || 500)
			if (error.sqlMessage) {
			  console.log(error.sqlMessage)
			  res.send(JSON.stringify({ error: error.sqlMessage }))
			} else {
			  console.log(JSON.stringify(error))
			  res.send(JSON.stringify({ error: 'Ismeretlen eredetű error' }))
			}
		  })
	  }
	}
  })
})

/* GET forgalom. */
router.get('/forgalom', function (req, res, next) {
  const sqlQuery = 'SELECT SUM(ar*mennyiseg) AS forgalom FROM rendelesek;'
  databaseQuery(sqlQuery)
	.then(result => {
	  res.send(JSON.stringify(result[0]))
	})
	.catch(error => {
	  res.status(error.status || 500)
	  if (error.sqlMessage) {
		console.log(error.sqlMessage)
		res.send(JSON.stringify({ error: error.sqlMessage }))
	  } else {
		console.log(JSON.stringify(error))
		res.send(JSON.stringify({ error: 'Ismeretlen eredetű error' }))
	  }
	})
})

/* GET legnepszerubb. */
router.get('/legnepszerubb', function (req, res, next) {
  res.send(JSON.stringify({ etelNev: 'LECSÓ KOLBÁSZCSIPSSZEL' }))
})

module.exports = router
