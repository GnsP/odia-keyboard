'use strict';

var chars = require('./chars.js');

class FSM {
  constructor () {
    this.isNative = false;
    this.reset();
  }

  reset () {
    this.prevKey = chars.ascii.SPACE;
    this.prevCons = false;
    this.prevPrevCons = false;

    this.hidden = false;
    this.posChanged = true;
  }

  toggleLang () {
    this.reset();
    this.isNative = !this.isNative;
    return this.isNative ? 'native' : 'odia';
  }

  input (char) {
    const noModifications = [0, char];
    if (this.isNative) return noModifications;

    let dist = 0;
    let str = '';
    let keycode = char.charCodeAt(0);

    if (!this.isAllowedKey(keycode)) {
      this.reset();
      return noModifications;
    }

    if (this.posChanged) {
      this.prevKey = chars.ascii.SPACE;
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
          str = chars.consonant[keycode];
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
            str = chars.vowel[keycode];
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
          str = chars.consonant[keycode];
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
            str = chars.vowel[keycode];
          }
        }
        this.prevPrevCons = this.prevCons;
        this.prevCons = false;
        this.hidden = false;
        break;

      case 'R':
        dist = 0;
        str = this.prevCons ? chars.consonant[keycode] : chars.vowel[keycode];
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
        str = chars.consonant[keycode];
        this.prevPrevCons = this.prevCons;
        this.prevCons = false;
        this.hidden = false;
        break;

      case '`':
        str = this.prevCons ? chars.consonant[chars.abstract.VIRAM] : '`';
        this.prevPrevCons = this.prevCons;
        this.prevCons = false;
        this.hidden = false;
        break;

      case '~':
        str = this.prevCons ? chars.consonant[chars.abstract.VIRAM] + chars.consonant[chars.abstract.ZWNJ] : '~';
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
            str = this.prevPrevCons ? chars.consonant[chars.abstract.VIRAM] + x : x;
            this.reset();
            this.prevPrevCons = false;
            this.prevCons = true;
          } else {
            if (chars.consonant[keycode]) {
              dist = 0;
              str = (this.prevCons && !this.prevPrevCons) ?
                chars.consonant[chars.abstract.VIRAM] + chars.consonant[keycode] : chars.consonant[keycode];
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
            if (chars.consonant[keycode]) {
              dist = 0;
              str = (this.prevCons && !this.prevPrevCons) ?
                chars.consonant[chars.abstract.VIRAM] + chars.consonant[keycode] : chars.consonant[keycode];
              this.reset();
              this.prevPrevCons = this.prevCons;
              this.prevCons = true;
            } else {
              if (chars.numeric[keycode]) {
                dist = 0;
                str = chars.numeric[keycode];
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
    this.posChanged = false;
    return [dist, str];
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
    for (const comb of chars.vowelCombination) {
      if (comb[0] === x && comb[1] === y) {
        return comb[2];
      }
    }
  }

  getConsonantCombination (x, y) {
    for (const comb of chars.consonantCombination) {
      if (comb[0] === x && comb[1] === y) {
        return comb[2];
      }
    }
  }

}

module.exports = FSM;
