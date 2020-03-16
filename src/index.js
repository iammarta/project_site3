window.addEventListener('DOMContentLoaded', function () {
 
let calculator = require('./calculator.js');
let forms = require('./forms.js');
let menu = require('./menu.js');
let popup = require('./popup.js');
let slider = require('./slider.js');
let tabs = require('./tabs.js');
let timer = require('./timer.js');

calculator();
forms();
menu();
popup();
slider();
tabs();
timer();

});