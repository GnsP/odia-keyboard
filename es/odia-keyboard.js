'use strict';

var chars = require('./chars.js');
var fsm = require('./fsm.js');

const nop = () => true;

class OdiaKeyboardDriver {
  constructor (el, onChange = nop, onLangChange = nop) {
    this.el = el;
    this.fsm = new fsm();

    this.onChange = val => onChange(val);
    this.onLangChange = val => onLangChange(val);
    this.init();
  }

  init () {
    document.body.addEventListener('keydown', (e) => {
      if (this.el.contains(e.target)) {
        if (e.keyCode === chars.ascii.TAB) {
          e.preventDefault();
          this.toggleLang();
          return;
        }
      }
    });
    this.el.addEventListener('keypress', this.handleKeyPress.bind(this));
    this.el.addEventListener('keyup', this.changeCursor.bind(this));
  }

  toggleLang () {
    const lang = this.fsm.toggleLang();
    this.onLangChange(lang);
  }

  handleKeyPress (e) {
    if (!this.isNative) {
      this.modify(e);
    }
    this.onChange(this.el.value);
  }

  changeCursor () {
    if (this.el.createTextRange) {
      this.el.cursorPos = document.selection.createRange().duplicate();
    }
    if (this.el.value.length === 0) this.fsm.reset();
  }

  modify (e) {
    if (e.altKey || e.ctrlKey) return true;
    e.preventDefault();

    const keycode = document.all ? e.keyCode : e.which;
    const char = String.fromCharCode(keycode);

    const [dist, str] = this.fsm.input(char);
    const val = this.el.value;
    const len = val.length;

    if (this.el.setSelectionRange) {
      const start = this.el.selectionStart;
      const left = val.substring(0, start + dist);
      const right = val.substring(start, len);
      const top = this.el.scrollTop;

      const end = str !== undefined ? start + dist + str.length : start + dist;
      this.el.value = left + str + right;
      this.el.scrollTop = top;
      this.el.focus();
      this.el.setSelectionRange(end, end);
    } else if (this.el.createTextRange && this.el.cursorPos) {
      const pos = this.el.cursorPos;
      pos.moveStart('character', dist);
      pos.text = (pos.text.charAt(pos.text.length - 1) === ' ') ?
        str + ' ' : str;
      pos.collapse(false);
      pos.scrollIntoView(true);
    } else {
      if (dist === 0) {
        this.el.value += str;
      } else {
        this.el.value = val.substring(0, len - 1) + str;
      }
    }

    this.el.focus();
    return false;
  }
}

module.exports = OdiaKeyboardDriver;
