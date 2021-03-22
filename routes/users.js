var express = require('express');
var router = express.Router();

router.get('/login', (req, res) => {
	res.render('login');
})

router.get('/register', (req, res) => {
	res.render('register');
})

router.post('/register', (req, res) => {

})

router.post('login', (req, res, next) => {

})

router.get('/logout', (req, res) => {

})

module.exports = router;