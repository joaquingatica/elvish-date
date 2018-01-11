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
    if (!(string && validator.test(string))) {
      return -1;
    }
    let num = 0;
    let m = token.exec(string);
    while (m) {
      num += key[m[0]];
      m = token.exec(string);
    }
    return num;
  },
  getDaysBetweenDates(date1, date2) {
    let dateStart = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
    let dateEnd = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());

    if (dateStart > dateEnd) {
      const tmp = dateStart;
      dateStart = dateEnd;
      dateEnd = tmp;
    }

    let daysBetween = 1;
    while (dateStart.getTime() < dateEnd.getTime()) {
      daysBetween += 1;

      const dateTmp = new Date(dateStart);
      dateTmp.setDate(dateTmp.getDate() + 1);

      dateStart = dateTmp;
    }
    return daysBetween;
  },
};

export default utils;
