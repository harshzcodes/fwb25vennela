var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jewelry', { title: 'Search Results jewelry' });
});

module.exports = router;