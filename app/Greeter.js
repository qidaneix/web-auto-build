var $ = require('jquery');
var beingthere = require('./beingthere.js');
var config = require('./config.json');

module.exports = function() {
    var greet = document.createElement('div');
    $(greet).text(beingthere + ' ' + config.greetText);
    //greet.textContent = "Hi there!~";

    return $(greet);
}
