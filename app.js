var express = require('express');
var app = express();
var router = express.Router();

var mongoose = require('mongoose')
var expressEjsLayout = require('express-ejs-layouts');

var port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected to database,'))
.catch((err) => console.log(err));

app.set('view engine', 'ejs');
app.use(expressEjsLayout);
app.use(express.urlencoded({extended: false}));

app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

app.listen(port)