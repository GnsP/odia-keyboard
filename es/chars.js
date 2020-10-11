'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const ascii = {
  TAB:    9,
  SPACE:  32,

  ZERO:   48,
  ONE:    49,
  TWO:    50,
  THREE:  51,
  FOUR:   52,
  FIVE:   53,
  SIX:    54,
  SEVEN:  55,
  EIGHT:  56,
  NINE:   57,

  COLON:  58,
  CAP:    94,
  TICK:   96,
  TILDE:  126,

  A: 65, B: 66, C: 67, D: 68, E: 69,
  F: 70, G: 71, H: 72, I: 73, J: 74,
  K: 75, L: 76, M: 77, N: 78, O: 79,
  P: 80, Q: 81, R: 82, S: 83, T: 84,
  U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90,

  a:  97, b:  98, c:  99, d: 100, e: 101,
  f: 102, g: 103, h: 104, i: 105, j: 106,
  k: 107, l: 108, m: 109, n: 110, o: 111,
  p: 112, q: 113, r: 114, s: 115, t: 116,
  u: 117, v: 118, w: 119, x: 120, y: 121, z: 122,
};

const abstract = {
  VIRAM: 1,
  VRU: 2,
  RU: 3,
  ZWJ: 4,
  ZWNJ: 5,
};

const special = {
  [ascii.SPACE]:  ' ',
  [ascii.COLON]:  '\u0b03', // VISARGA
  [ascii.CAP]:    '\u0b01', // CHANDRA BINDU
  [ascii.M]:      '\u0b02', // ANUSWAR
  [ascii.TICK]:   '\u0b4d', // HALANT
  [ascii.E]:      '\u0b3d', // ABAGRAHA
  [ascii.V]:      '\u0b70', // ISSHAR
  [ascii.Q]:      '\u0950', // OMM
  [ascii.q]:      '\u20b9', // RUPEE

  [abstract.VIRAM]: '\u0b4d',
  [abstract.ZWJ]: '\u200d',
  [abstract.ZWNJ]: '\u200c',
};

const numeric = {
  [ascii.ZERO]:   '\u0b66',
  [ascii.ONE]:    '\u0b67',
  [ascii.TWO]:    '\u0b68',
  [ascii.THREE]:  '\u0b69',
  [ascii.FOUR]:   '\u0b6a',
  [ascii.FIVE]:   '\u0b6b',
  [ascii.SIX]:    '\u0b6c',
  [ascii.SEVEN]:  '\u0b6d',
  [ascii.EIGHT]:  '\u0b6e',
  [ascii.NINE]:   '\u0b6f',
};

const vowel = {
  [ascii.a]: '\u0b05',
  [ascii.A]: '\u0b06',
  [ascii.i]: '\u0b07',
  [ascii.I]: '\u0b08',
  [ascii.u]: '\u0b09',
  [ascii.U]: '\u0b0a',
  [ascii.R]: '\u0b0b',
  [ascii.O]: '\u0b0c',
  [ascii.e]: '\u0b0f',
  [ascii.o]: '\u0b13',
};

const vowelCombination = [
  [ascii.a, ascii.a, '\u0b06'],
  [ascii.e, ascii.e, '\u0b08'],
  [ascii.o, ascii.o, '\u0b0a'],
  [ascii.R, ascii.U, '\u0b60'],
  [ascii.a, ascii.i, '\u0b10'],
  [ascii.a, ascii.u, '\u0b14'],
];

const consonant = {
  ...special,

  [ascii.k]: '\u0b15',
  [ascii.g]: '\u0b17',
  [ascii.c]: '\u0b1a',
  [ascii.C]: '\u0b1b',
  [ascii.j]: '\u0b1c',
  [ascii.z]: '\u0b1d',
  [ascii.T]: '\u0b1f',
  [ascii.D]: '\u0b21',
  [ascii.N]: '\u0b23',
  [ascii.t]: '\u0b24',
  [ascii.d]: '\u0b26',
  [ascii.n]: '\u0b28',
  [ascii.p]: '\u0b2a',
  [ascii.f]: '\u0b2b',
  [ascii.b]: '\u0b2c',
  [ascii.v]: '\u0b2d',
  [ascii.m]: '\u0b2e',
  [ascii.y]: '\u0b2f',
  [ascii.r]: '\u0b30',
  [ascii.l]: '\u0b32',
  [ascii.L]: '\u0b33',
  [ascii.w]: '\u0b35',
  [ascii.W]: '\u0b71',
  [ascii.s]: '\u0b38',
  [ascii.S]: '\u0b37',
  [ascii.x]: '\u0b15\u0b4d\u0b37',
  [ascii.h]: '\u0b39',
  [ascii.Y]: '\u0b5f',

  [ascii.a]: '',
  [ascii.A]: '\u0b3e',
  [ascii.i]: '\u0b3f',
  [ascii.I]: '\u0b40',
  [ascii.u]: '\u0b41',
  [ascii.U]: '\u0b42',
  [ascii.e]: '\u0b47',
  [ascii.O]: '\u0b62',
  [ascii.o]: '\u0b4b',
  [ascii.R]: '\u0b43',
};

const consonantCombination = [
  [ascii.k, ascii.h, '\u0b16'],
  [ascii.g, ascii.h, '\u0b18'],
  [ascii.c, ascii.h, '\u0b1a'],
  [ascii.C, ascii.h, '\u0b1b'],
  [ascii.j, ascii.h, '\u0b1d'],
  [ascii.T, ascii.h, '\u0b20'],
  [ascii.D, ascii.h, '\u0b22'],
  [ascii.t, ascii.h, '\u0b25'],
  [ascii.d, ascii.h, '\u0b27'],
  [ascii.p, ascii.h, '\u0b2b'],
  [ascii.b, ascii.h, '\u0b2d'],
  [ascii.s, ascii.h, '\u0b36'],
  [ascii.S, ascii.h, '\u0b37'],

  [ascii.a, ascii.a, '\u0b3e'],
  [ascii.e, ascii.e, '\u0b40'],
  [ascii.o, ascii.o, '\u0b42'],
  [ascii.a, ascii.i, '\u0b48'],
  [ascii.a, ascii.u, '\u0b4c'],
  [ascii.R, ascii.U, '\u0b43'],

  [ascii.N, ascii.G, '\u0b19'],
  [ascii.N, ascii.Y, '\u0b1e'],
  [ascii.D, ascii.D, '\u0b5c'],
  [ascii.D, ascii.H, '\u0b5d'],
  [ascii.J, ascii.n, '\u0b1c\u0b4d\u0b1e'],
];

exports.abstract = abstract;
exports.ascii = ascii;
exports.consonant = consonant;
exports.consonantCombination = consonantCombination;
exports.numeric = numeric;
exports.special = special;
exports.vowel = vowel;
exports.vowelCombination = vowelCombination;
