import {
  ascii,
  abstract,
  numeric,
  vowel,
  vowelCombination,
  consonant,
  consonantCombination,
} from './chars';

const nop = () => true;

export default class OdiaKeyboardDriver {
  constructor (el, onChange = nop, onLangChange = nop) {
    this.el = el;
    this.isNative = false;

    this.onChange = val => onChange(val);
    this.onLangChange = val => onLangChange(val);

    this.reset();
    this.init();
  }

  reset () {
    this.prevKey = ascii.SPACE;
    this.prevCons = false;
    this.prevPrevCons = false;

    this.hidden = false;
    this.posChanged = true;
  }

  init () {
    document.body.addEventListener('keydown', (e) => {
      if (this.el.contains(e.target)) {
        if (e.keyCode === ascii.TAB) {
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
    this.reset();
    this.isNative = !this.isNative;
    this.onLangChange(this.isNative ? 'native' : 'odia');
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
    if (this.el.value.length === 0) this.reset();
  }

  modify (e) {
    if (e.altKey || e.ctrlKey) return true;

    let dist = 0;
    let str = '';
    let keycode = document.all ? e.keyCode : e.which;

    const self = this;

    if (!this.isAllowedKey(keycode)) {
      this.reset();
      return true;
    }

    e.preventDefault();
    const char = String.fromCharCode(keycode);

    if (this.posChanged) {
      this.prevKey = ascii.SPACE;
      this.hidden = false;
      this.prevCons = false;
      this.prevPrevCons = false;
    }

    let x, y;
    switch (char) {
      case 'a':
        x = this.getConsonantCombination(this.prevKey, keycode);
        y = this.getVowelCombination(this.prevKey, keycode);
        if (this.prevCons) {
          dist = 0;
          str = consonant[keycode];
        } else {
          if (y) {
            if (this.prevPrevCons) {
              dist = 0;
              str = x;
            } else {
              dist -= 1;
              str = y;
            }
          } else {
            dist = 0;
            str = vowel[keycode];
          }
        }
        this.prevPrevCons = this.prevCons;
        this.prevCons = false;
        this.hidden = false;
        break;

      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'A':
      case 'I':
      case 'O':
      case 'U':
        x = this.getConsonantCombination(this.prevKey, keycode);
        y = this.getVowelCombination(this.prevKey, keycode);
        if (this.prevCons) {
          dist = 0;
          str = consonant[keycode];
        } else {
          if (y) {
            if (this.prevPrevCons) {
              dist = this.prevKey === keycode ? dist - 1 : 0;
              str = x;
            } else {
              dist -= 1;
              str = y;
            }
          } else {
            dist = 0;
            str = vowel[keycode];
          }
        }
        this.prevPrevCons = this.prevCons;
        this.prevCons = false;
        this.hidden = false;
        break;

      case 'R':
        dist = 0;
        str = this.prevCons ? consonant[keycode] : vowel[keycode];
        this.prevPrevCons = this.prevCons;
        this.prevCons = false;
        this.hidden = false;
        break;

      case 'M':
      case '^':
      case ':':
      case 'E':
      case 'V':
      case 'q':
      case 'Q':
        str = consonant[keycode];
        this.prevPrevCons = this.prevCons;
        this.prevCons = false;
        this.hidden = false;
        break;

      case '`':
        str = this.prevCons ? consonant[abstract.VIRAM] : '`';
        this.prevPrevCons = this.prevCons;
        this.prevCons = false;
        this.hidden = false;
        break;

      case '~':
        str = this.prevCons ? consonant[abstract.VIRAM] + consonant[abstract.ZWJ] : '~';
        this.prevPrevCons = this.prevCons;
        this.prevCons = false;
        this.hidden = false;
        break;

      case ' ':
        dist = 0;
        str = ' ';
        this.prevPrevCons = false;
        this.prevCons = false;
        this.hidden = false;
        break;

      default:
        x = this.getConsonantCombination(this.prevKey, keycode);
        if (this.hidden) {
          if (x) {
            dist = 0;
            str = this.prevPrevCons ? consonant[abstract.VIRAM] + x : x;
            this.reset();
            this.prevPrevCons = false;
            this.prevCons = true;
          } else {
            if (consonant[keycode]) {
              dist = 0;
              str = (this.prevCons && !this.prevPrevCons) ?
                consonant[abstract.VIRAM] + consonant[keycode] : consonant[keycode];
              this.reset();
              this.prevPrevCons = this.prevCons;
              this.prevCons = true;
              this.hidden = false;
            } else {
              dist = 0;
              this.prevPrevCons = this.prevCons;
              this.prevCons = false;
            }
          }
        } else {
          if (x) {
            dist -= 1;
            str = x;
            this.reset();
            this.prevPrevCons = false;
            this.prevCons = true;
          } else {
            if (consonant[keycode]) {
              dist = 0;
              str = (this.prevCons && !this.prevPrevCons) ?
                consonant[abstract.VIRAM] + consonant[keycode] : consonant[keycode];
              this.reset();
              this.prevPrevCons = this.prevCons;
              this.prevCons = true;
            } else {
              if (numeric[keycode]) {
                dist = 0;
                str = numeric[keycode];
                this.prevPrevCons = this.prevCons;
                this.prevCons = false;
              } else {
                this.prevPrevCons = this.prevCons;
                this.prevCons = true;
                this.hidden = true;
              }
            }
          }
        }
        break;
    }

    this.prevKey = keycode;
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
    this.posChanged = false;
    return false;
  }

  isAllowedKey (keycode) {
    if (
      keycode < 32
      || keycode >= 33 && keycode <= 47
      || keycode >= 59 && keycode <= 64
      || keycode >= 91 && keycode <= 93
      || keycode === 95
      || keycode >= 123 && keycode <= 125
      || keycode >= 127
    ) return false;

    return true;
  }

  getVowelCombination (x, y) {
    for (const comb of vowelCombination) {
      if (comb[0] === x && comb[1] === y) {
        return comb[2];
      }
    }
  }

  getConsonantCombination (x, y) {
    for (const comb of consonantCombination) {
      if (comb[0] === x && comb[1] === y) {
        return comb[2];
      }
    }
  }

}
