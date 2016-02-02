var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Ling Lu' });
});

/* GET index page. */
router.get('/index.html', function(req, res) {
  res.render('index', { title: 'Ling Lu' });
});

/* GET proudcts page. */
router.get('/products.html', function(req, res) {
  res.render('products', { title: 'Ling Lu' });
});

/* GET detail page. */
router.get('/detail.html', function(req, res) {
  res.render('detail', { title: 'Ling Lu' });
});


module.exports = router;
