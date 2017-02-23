var $ = require('jquery');
var moment = require('moment');
require('bootstrap-sass');
var sub = require('./sub');
require('./main.scss');

var app  = document.createElement('div');
app.innerHTML = '<h1>Hello Wofasdfasfsdasfdrld</h1>';
app.appendChild(sub());
document.body.appendChild(app);
$('body').append('<p><span class="fa fa-camera-retro fa-lg"></span>development! now is ' + moment().format() + '<span class="glyphicon glyphicon-euro"></span>hh</p>');
$('body').modal();
