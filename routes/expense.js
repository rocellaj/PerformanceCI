var express = require('express');
var router = express.Router();

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'rocellajimenez',
  host: 'localhost',
  database: 'travel',
  password: '',
  port: 5432,
})

router.get('/', function(req, res, next) {

  pool.query('SELECT * FROM expense ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
});
module.exports = router;
