var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	res.render('welcome');
})

router.get('/register', (req, res) => {
	res.render('register');
})

module.exports = router;