var express = require('express');
var router = express.Router();
var customers = require('../customers');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json(customers);
});

module.exports = router;
