var $ = require('jquery');
var Greeter = require('./Greeter.js');

console.log(Greeter());
// throw new Error('what fuck?!');
$('#root').html(Greeter());
//document.getElementById('root').appendChild(greeter());
