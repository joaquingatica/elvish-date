function yestareDay(loaBegins, loaEnds, dayOfMarch) {
  return {
    begins: loaBegins,
    ends: loaEnds,
    yestareMarchDay: dayOfMarch,
  };
}

const constants = {
  attributes: ['yen', 'loa', 'period', 'day'/* , 'hour', 'minute', 'second', 'millisecond' */],
  attributeNames: {
    // specifiers
    yen: 'Yen',
    loa: 'Loa',
    period: 'Period of Loa',
    day: 'Day of Period',
    /* hour: 'Hour',
    minute: 'Minute',
    second: 'Second',
    millisecond: 'Millisecond', */

    // derived
    dayOfLoa: 'Day of Loa',
    dayOfWeek: 'Day of Week',
    weekOfPeriod: 'Week of Period',
  },
  periods: [
    { name: 'Yestarë', length: { standard: 1, leap: 1 } },
    { name: 'Tuilë', length: { standard: 54, leap: 54 } },
    { name: 'Lairë', length: { standard: 72, leap: 72 } },
    { name: 'Yávië', length: { standard: 54, leap: 54 } },
    { name: 'Ender', length: { standard: 3, leap: 6 } },
    { name: 'Quellë', length: { standard: 54, leap: 54 } },
    { name: 'Hrívë', length: { standard: 72, leap: 72 } },
    { name: 'Coirë', length: { standard: 54, leap: 54 } },
    { name: 'Mettarë', length: { standard: 1, leap: 1 } },
  ],
  days: {
  },
  daysOfWeek: [
    'Elenya', 'Anarya', 'Isilya', 'Aldúya', 'Menelya', 'Valanya',
  ],
  firstYestareDayOfWeek: 0,
  /* eslint-disable array-bracket-spacing */
  yestareMap: [
    [ yestareDay(1, 144, 26) ], // I
    [ yestareDay(1, 144, 26) ], // II
    [ yestareDay(1, 144, 26) ], // III
    [ yestareDay(1, 144, 23) ], // IV
    [ yestareDay(1, 144, 23) ], // V
    [ yestareDay(1, 144, 23) ], // VI
    [ yestareDay(1, 144, 20) ], // VII
    [ yestareDay(1, 144, 20) ], // VIII
    [ yestareDay(1, 144, 20) ], // IX
    [ yestareDay(1, 144, 17) ], // X
    [ yestareDay(1, 142, 17), yestareDay(143, 144, 27) ], // XI
    [ yestareDay(1, 115, 27), yestareDay(116, 144, 28) ], // XII
    [ yestareDay(1, 71, 25), yestareDay(72, 144, 26) ], // XIII
    [ yestareDay(1, 27, 26), yestareDay(28, 144, 27) ], // XIV
    [ yestareDay(1, 83, 27), yestareDay(84, 144, 28) ], // XV
    [ yestareDay(1, 39, 25), yestareDay(40, 139, 26), yestareDay(140, 144, 26) ], // XVI
  ],
  /* eslint-enable array-bracket-spacing */
};

export default constants;
