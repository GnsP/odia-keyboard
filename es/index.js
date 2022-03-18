'use strict';

var odiaKeyboard = require('./odia-keyboard.js');
require('./chars.js');
require('./fsm.js');

window.OdiaKeyboardDriver = odiaKeyboard;

module.exports = odiaKeyboard;
