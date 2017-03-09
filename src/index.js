import Time from './Time';
import ElvishDate from './ElvishDate';

/* eslint-disable */
new ElvishDate().convert();
new ElvishDate(new Date().getTime()).convert();

ElvishDate.fromDate().convert();
ElvishDate.fromDate(new Date()).convert();
ElvishDate.fromDate(new Date().getTime()).convert();
ElvishDate.fromDate('2017-3-8').convert();
ElvishDate.fromDate(2017, 2).convert();
ElvishDate.fromDate(2017, 2, 8).convert();
ElvishDate.fromDate(2017, 2, 8, 22).convert();
ElvishDate.fromDate(2017, 2, 8, 22, 10, 2, 70).convert();
/* eslint-enable */
