const utils = {
  getRomanFromNumber(number) {
    if (!+number) {
      return NaN;
    }
    const digits = String(+number).split('');
    const key = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
      '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
      '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    let roman = '';
    let i = 3;
    while (i) {
      i -= 1;
      roman = (key[+digits.pop() + (i * 10)] || '') + roman;
    }
    return Array(+digits.join('') + 1).join('M') + roman;
  },
  getIntFromRomanNumeral(roman) {
    const string = roman.toUpperCase();
    const validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/;
    const token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g;
    /* eslint-disable object-property-newline */
    const key = {
      M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
      L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1,
    };
    /* eslint-enable object-property-newline */
    let num = 0;
    if (!(string && validator.test(string))) {
      return false;
    }
    let m = token.exec(string);
    while (m) {
      num += key[m[0]];
      m = token.exec(string);
    }
    return num;
  },
  getDaysBetweenDates(date1, date2) {
    const dateFirst = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const dateSecond = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
    return Math.abs(Math.floor((dateFirst - dateSecond) / (1000 * 60 * 60 * 24)));
  },
};

export default utils;
