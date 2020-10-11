"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OdiaKeyboardDriver = function () {
  'use strict';

  var _special, _numeric, _vowel, _objectSpread2;

  var ascii$1 = {
    TAB: 9,
    SPACE: 32,
    ZERO: 48,
    ONE: 49,
    TWO: 50,
    THREE: 51,
    FOUR: 52,
    FIVE: 53,
    SIX: 54,
    SEVEN: 55,
    EIGHT: 56,
    NINE: 57,
    COLON: 58,
    CAP: 94,
    TICK: 96,
    TILDE: 126,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    a: 97,
    b: 98,
    c: 99,
    d: 100,
    e: 101,
    f: 102,
    g: 103,
    h: 104,
    i: 105,
    j: 106,
    k: 107,
    l: 108,
    m: 109,
    n: 110,
    o: 111,
    p: 112,
    q: 113,
    r: 114,
    s: 115,
    t: 116,
    u: 117,
    v: 118,
    w: 119,
    x: 120,
    y: 121,
    z: 122
  };
  var abstract = {
    VIRAM: 1,
    VRU: 2,
    RU: 3,
    ZWJ: 4,
    ZWNJ: 5
  };
  var special = (_special = {}, _defineProperty(_special, ascii$1.SPACE, ' '), _defineProperty(_special, ascii$1.COLON, "\u0B03"), _defineProperty(_special, ascii$1.CAP, "\u0B01"), _defineProperty(_special, ascii$1.M, "\u0B02"), _defineProperty(_special, ascii$1.TICK, "\u0B4D"), _defineProperty(_special, ascii$1.E, "\u0B3D"), _defineProperty(_special, ascii$1.V, "\u0B70"), _defineProperty(_special, ascii$1.Q, "\u0950"), _defineProperty(_special, ascii$1.q, "\u20B9"), _defineProperty(_special, abstract.VIRAM, "\u0B4D"), _defineProperty(_special, abstract.ZWJ, "\u200D"), _defineProperty(_special, abstract.ZWNJ, "\u200C"), _special);
  var numeric = (_numeric = {}, _defineProperty(_numeric, ascii$1.ZERO, "\u0B66"), _defineProperty(_numeric, ascii$1.ONE, "\u0B67"), _defineProperty(_numeric, ascii$1.TWO, "\u0B68"), _defineProperty(_numeric, ascii$1.THREE, "\u0B69"), _defineProperty(_numeric, ascii$1.FOUR, "\u0B6A"), _defineProperty(_numeric, ascii$1.FIVE, "\u0B6B"), _defineProperty(_numeric, ascii$1.SIX, "\u0B6C"), _defineProperty(_numeric, ascii$1.SEVEN, "\u0B6D"), _defineProperty(_numeric, ascii$1.EIGHT, "\u0B6E"), _defineProperty(_numeric, ascii$1.NINE, "\u0B6F"), _numeric);
  var vowel = (_vowel = {}, _defineProperty(_vowel, ascii$1.a, "\u0B05"), _defineProperty(_vowel, ascii$1.A, "\u0B06"), _defineProperty(_vowel, ascii$1.i, "\u0B07"), _defineProperty(_vowel, ascii$1.I, "\u0B08"), _defineProperty(_vowel, ascii$1.u, "\u0B09"), _defineProperty(_vowel, ascii$1.U, "\u0B0A"), _defineProperty(_vowel, ascii$1.R, "\u0B0B"), _defineProperty(_vowel, ascii$1.O, "\u0B0C"), _defineProperty(_vowel, ascii$1.e, "\u0B0F"), _defineProperty(_vowel, ascii$1.o, "\u0B13"), _vowel);
  var vowelCombination = [[ascii$1.a, ascii$1.a, "\u0B06"], [ascii$1.e, ascii$1.e, "\u0B08"], [ascii$1.o, ascii$1.o, "\u0B0A"], [ascii$1.R, ascii$1.U, "\u0B60"], [ascii$1.a, ascii$1.i, "\u0B10"], [ascii$1.a, ascii$1.u, "\u0B14"]];

  var consonant = _objectSpread(_objectSpread({}, special), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, ascii$1.k, "\u0B15"), _defineProperty(_objectSpread2, ascii$1.g, "\u0B17"), _defineProperty(_objectSpread2, ascii$1.c, "\u0B1A"), _defineProperty(_objectSpread2, ascii$1.C, "\u0B1B"), _defineProperty(_objectSpread2, ascii$1.j, "\u0B1C"), _defineProperty(_objectSpread2, ascii$1.z, "\u0B1D"), _defineProperty(_objectSpread2, ascii$1.T, "\u0B1F"), _defineProperty(_objectSpread2, ascii$1.D, "\u0B21"), _defineProperty(_objectSpread2, ascii$1.N, "\u0B23"), _defineProperty(_objectSpread2, ascii$1.t, "\u0B24"), _defineProperty(_objectSpread2, ascii$1.d, "\u0B26"), _defineProperty(_objectSpread2, ascii$1.n, "\u0B28"), _defineProperty(_objectSpread2, ascii$1.p, "\u0B2A"), _defineProperty(_objectSpread2, ascii$1.f, "\u0B2B"), _defineProperty(_objectSpread2, ascii$1.b, "\u0B2C"), _defineProperty(_objectSpread2, ascii$1.v, "\u0B2D"), _defineProperty(_objectSpread2, ascii$1.m, "\u0B2E"), _defineProperty(_objectSpread2, ascii$1.y, "\u0B2F"), _defineProperty(_objectSpread2, ascii$1.r, "\u0B30"), _defineProperty(_objectSpread2, ascii$1.l, "\u0B32"), _defineProperty(_objectSpread2, ascii$1.L, "\u0B33"), _defineProperty(_objectSpread2, ascii$1.w, "\u0B35"), _defineProperty(_objectSpread2, ascii$1.W, "\u0B71"), _defineProperty(_objectSpread2, ascii$1.s, "\u0B38"), _defineProperty(_objectSpread2, ascii$1.S, "\u0B37"), _defineProperty(_objectSpread2, ascii$1.x, "\u0B15\u0B4D\u0B37"), _defineProperty(_objectSpread2, ascii$1.h, "\u0B39"), _defineProperty(_objectSpread2, ascii$1.Y, "\u0B5F"), _defineProperty(_objectSpread2, ascii$1.a, ''), _defineProperty(_objectSpread2, ascii$1.A, "\u0B3E"), _defineProperty(_objectSpread2, ascii$1.i, "\u0B3F"), _defineProperty(_objectSpread2, ascii$1.I, "\u0B40"), _defineProperty(_objectSpread2, ascii$1.u, "\u0B41"), _defineProperty(_objectSpread2, ascii$1.U, "\u0B42"), _defineProperty(_objectSpread2, ascii$1.e, "\u0B47"), _defineProperty(_objectSpread2, ascii$1.O, "\u0B62"), _defineProperty(_objectSpread2, ascii$1.o, "\u0B4B"), _defineProperty(_objectSpread2, ascii$1.R, "\u0B43"), _objectSpread2));

  var consonantCombination = [[ascii$1.k, ascii$1.h, "\u0B16"], [ascii$1.g, ascii$1.h, "\u0B18"], [ascii$1.c, ascii$1.h, "\u0B1A"], [ascii$1.C, ascii$1.h, "\u0B1B"], [ascii$1.j, ascii$1.h, "\u0B1D"], [ascii$1.T, ascii$1.h, "\u0B20"], [ascii$1.D, ascii$1.h, "\u0B22"], [ascii$1.t, ascii$1.h, "\u0B25"], [ascii$1.d, ascii$1.h, "\u0B27"], [ascii$1.p, ascii$1.h, "\u0B2B"], [ascii$1.b, ascii$1.h, "\u0B2D"], [ascii$1.s, ascii$1.h, "\u0B36"], [ascii$1.S, ascii$1.h, "\u0B37"], [ascii$1.a, ascii$1.a, "\u0B3E"], [ascii$1.e, ascii$1.e, "\u0B40"], [ascii$1.o, ascii$1.o, "\u0B42"], [ascii$1.a, ascii$1.i, "\u0B48"], [ascii$1.a, ascii$1.u, "\u0B4C"], [ascii$1.R, ascii$1.U, "\u0B43"], [ascii$1.N, ascii$1.G, "\u0B19"], [ascii$1.N, ascii$1.Y, "\u0B1E"], [ascii$1.D, ascii$1.D, "\u0B5C"], [ascii$1.D, ascii$1.H, "\u0B5D"], [ascii$1.J, ascii$1.n, "\u0B1C\u0B4D\u0B1E"]];

  var FSM = /*#__PURE__*/function () {
    function FSM() {
      _classCallCheck(this, FSM);

      this.isNative = false;
      this.reset();
    }

    _createClass(FSM, [{
      key: "reset",
      value: function reset() {
        this.prevKey = ascii$1.SPACE;
        this.prevCons = false;
        this.prevPrevCons = false;
        this.hidden = false;
        this.posChanged = true;
      }
    }, {
      key: "toggleLang",
      value: function toggleLang() {
        this.reset();
        this.isNative = !this.isNative;
        return this.isNative ? 'native' : 'odia';
      }
    }, {
      key: "input",
      value: function input(char) {
        var noModifications = [0, char];
        if (this.isNative) return noModifications;
        var dist = 0;
        var str = '';
        var keycode = char.charCodeAt(0);

        if (!this.isAllowedKey(keycode)) {
          this.reset();
          return noModifications;
        }

        if (this.posChanged) {
          this.prevKey = ascii$1.SPACE;
          this.hidden = false;
          this.prevCons = false;
          this.prevPrevCons = false;
        }

        var x, y;

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
                  str = this.prevCons && !this.prevPrevCons ? consonant[abstract.VIRAM] + consonant[keycode] : consonant[keycode];
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
                  str = this.prevCons && !this.prevPrevCons ? consonant[abstract.VIRAM] + consonant[keycode] : consonant[keycode];
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
        this.posChanged = false;
        return [dist, str];
      }
    }, {
      key: "isAllowedKey",
      value: function isAllowedKey(keycode) {
        if (keycode < 32 || keycode >= 33 && keycode <= 47 || keycode >= 59 && keycode <= 64 || keycode >= 91 && keycode <= 93 || keycode === 95 || keycode >= 123 && keycode <= 125 || keycode >= 127) return false;
        return true;
      }
    }, {
      key: "getVowelCombination",
      value: function getVowelCombination(x, y) {
        var _iterator = _createForOfIteratorHelper(vowelCombination),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var comb = _step.value;

            if (comb[0] === x && comb[1] === y) {
              return comb[2];
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }, {
      key: "getConsonantCombination",
      value: function getConsonantCombination(x, y) {
        var _iterator2 = _createForOfIteratorHelper(consonantCombination),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var comb = _step2.value;

            if (comb[0] === x && comb[1] === y) {
              return comb[2];
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }]);

    return FSM;
  }();

  var nop = function nop() {
    return true;
  };

  var OdiaKeyboardDriver = /*#__PURE__*/function () {
    function OdiaKeyboardDriver(el) {
      var onChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : nop;
      var onLangChange = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : nop;

      _classCallCheck(this, OdiaKeyboardDriver);

      this.el = el;
      this.fsm = new FSM();

      this.onChange = function (val) {
        return onChange(val);
      };

      this.onLangChange = function (val) {
        return onLangChange(val);
      };

      this.init();
    }

    _createClass(OdiaKeyboardDriver, [{
      key: "init",
      value: function init() {
        var _this = this;

        document.body.addEventListener('keydown', function (e) {
          if (_this.el.contains(e.target)) {
            if (e.keyCode === ascii.TAB) {
              e.preventDefault();

              _this.toggleLang();

              return;
            }
          }
        });
        this.el.addEventListener('keypress', this.handleKeyPress.bind(this));
        this.el.addEventListener('keyup', this.changeCursor.bind(this));
      }
    }, {
      key: "toggleLang",
      value: function toggleLang() {
        var lang = this.fsm.toggleLang();
        this.onLangChange(lang);
      }
    }, {
      key: "handleKeyPress",
      value: function handleKeyPress(e) {
        if (!this.isNative) {
          this.modify(e);
        }

        this.onChange(this.el.value);
      }
    }, {
      key: "changeCursor",
      value: function changeCursor() {
        if (this.el.createTextRange) {
          this.el.cursorPos = document.selection.createRange().duplicate();
        }

        if (this.el.value.length === 0) this.fsm.reset();
      }
    }, {
      key: "modify",
      value: function modify(e) {
        if (e.altKey || e.ctrlKey) return true;
        e.preventDefault();
        var keycode = document.all ? e.keyCode : e.which;
        var char = String.fromCharCode(keycode);

        var _this$fsm$input = this.fsm.input(char),
            _this$fsm$input2 = _slicedToArray(_this$fsm$input, 2),
            dist = _this$fsm$input2[0],
            str = _this$fsm$input2[1];

        var val = this.el.value;
        var len = val.length;

        if (this.el.setSelectionRange) {
          var start = this.el.selectionStart;
          var left = val.substring(0, start + dist);
          var right = val.substring(start, len);
          var top = this.el.scrollTop;
          var end = str !== undefined ? start + dist + str.length : start + dist;
          this.el.value = left + str + right;
          this.el.scrollTop = top;
          this.el.focus();
          this.el.setSelectionRange(end, end);
        } else if (this.el.createTextRange && this.el.cursorPos) {
          var pos = this.el.cursorPos;
          pos.moveStart('character', dist);
          pos.text = pos.text.charAt(pos.text.length - 1) === ' ' ? str + ' ' : str;
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
    }]);

    return OdiaKeyboardDriver;
  }();

  window.OdiaKeyboardDriver = OdiaKeyboardDriver;
  return OdiaKeyboardDriver;
}();
