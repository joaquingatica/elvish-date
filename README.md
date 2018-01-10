# Elvish Date library

This npm module `elvish-date` includes the `ElvishDate` class that mimics the standard JavaScript [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) class, but for the Reckoning of Imladris (aka Imladris Calendar or Elvish Calendar).

NPM module for Elvish Calendar conversion of dates and utilities

**WARNING: Module in development, no stable release yet**

---

# Documentation

Find the JSDoc documentation [here](https://joaquingatica.github.io/elvish-date/), or below.

<a name="ElvishDate"></a>

## ElvishDate
**Kind**: global class  

* [ElvishDate](#ElvishDate)
    * [new ElvishDate([...args])](#new_ElvishDate_new)
    * _instance_
        * [.getYen()](#ElvishDate+getYen) ⇒ <code>number</code>
        * [.getYenNumeral()](#ElvishDate+getYenNumeral) ⇒ <code>string</code>
        * [.getLoa()](#ElvishDate+getLoa) ⇒ <code>number</code>
        * [.getPeriod()](#ElvishDate+getPeriod) ⇒ <code>number</code>
        * [.getPeriodName()](#ElvishDate+getPeriodName) ⇒ <code>string</code>
        * [.getDayOfLoa()](#ElvishDate+getDayOfLoa) ⇒ <code>number</code>
        * [.getDayOfPeriod()](#ElvishDate+getDayOfPeriod) ⇒ <code>number</code>
        * [.getDayOfWeek()](#ElvishDate+getDayOfWeek) ⇒ <code>number</code>
        * [.getDayOfWeekName()](#ElvishDate+getDayOfWeekName) ⇒ <code>string</code>
        * [.getTime()](#ElvishDate+getTime) ⇒ <code>number</code>
        * [.setYen(yen)](#ElvishDate+setYen)
        * [.setLoa(loa)](#ElvishDate+setLoa)
        * [.setPeriod(period)](#ElvishDate+setPeriod)
        * [.setDayOfPeriod(dayOfPeriod)](#ElvishDate+setDayOfPeriod)
        * [.setTime()](#ElvishDate+setTime) ⇒ <code>number</code>
        * [.toString()](#ElvishDate+toString) ⇒ <code>string</code>
        * [.toDate()](#ElvishDate+toDate) ⇒ <code>Date</code>
    * _static_
        * [.length](#ElvishDate.length) ⇒ <code>number</code>
        * [.fromDate([...args])](#ElvishDate.fromDate) ⇒ [<code>ElvishDate</code>](#ElvishDate)
        * [.now()](#ElvishDate.now) ⇒ <code>number</code>

<a name="new_ElvishDate_new"></a>

### new ElvishDate([...args])
constructor()<br />
constructor(Date)<br />
constructor(ElvishDate)<br />
constructor(attributes)<br />
constructor(yen, loa, period[, day])<br />


| Param | Type |
| --- | --- |
| [...args] | <code>Date</code> \| [<code>ElvishDate</code>](#ElvishDate) \| <code>Object</code> \| <code>number</code> | 

<a name="ElvishDate+getYen"></a>

### elvishDate.getYen() ⇒ <code>number</code>
Return number of the Yen (> 0) for the specified date

**Kind**: instance method of [<code>ElvishDate</code>](#ElvishDate)  
<a name="ElvishDate+getYenNumeral"></a>

### elvishDate.getYenNumeral() ⇒ <code>string</code>
Returns the roman numerals representation of the Yen for the specified date

**Kind**: instance method of [<code>ElvishDate</code>](#ElvishDate)  
<a name="ElvishDate+getLoa"></a>

### elvishDate.getLoa() ⇒ <code>number</code>
Return the number of the Loa (1-144) for the specified date

**Kind**: instance method of [<code>ElvishDate</code>](#ElvishDate)  
<a name="ElvishDate+getPeriod"></a>

### elvishDate.getPeriod() ⇒ <code>number</code>
Return the number (0-8) of the Period for the specified date

**Kind**: instance method of [<code>ElvishDate</code>](#ElvishDate)  
<a name="ElvishDate+getPeriodName"></a>

### elvishDate.getPeriodName() ⇒ <code>string</code>
Return the name of the Period for the specified date

**Kind**: instance method of [<code>ElvishDate</code>](#ElvishDate)  
<a name="ElvishDate+getDayOfLoa"></a>

### elvishDate.getDayOfLoa() ⇒ <code>number</code>
Return the number of Day of the Loa (1-based index) for the specified date

**Kind**: instance method of [<code>ElvishDate</code>](#ElvishDate)  
<a name="ElvishDate+getDayOfPeriod"></a>

### elvishDate.getDayOfPeriod() ⇒ <code>number</code>
Return the number of Day of the Period (1-based index, upper limit depends on Period)
for the specified date

**Kind**: instance method of [<code>ElvishDate</code>](#ElvishDate)  
<a name="ElvishDate+getDayOfWeek"></a>

### elvishDate.getDayOfWeek() ⇒ <code>number</code>
Return the number (0-5) of Day of the Week for the specified date

**Kind**: instance method of [<code>ElvishDate</code>](#ElvishDate)  
<a name="ElvishDate+getDayOfWeekName"></a>

### elvishDate.getDayOfWeekName() ⇒ <code>string</code>
Return the name of the Day of the Week for the specified date

**Kind**: instance method of [<code>ElvishDate</code>](#ElvishDate)  
<a name="ElvishDate+getTime"></a>

### elvishDate.getTime() ⇒ <code>number</code>
Returns the numeric value of the specified date as the number of milliseconds
since Yestarë, I 1, 00:00:00 (not supported for prior times).

**Kind**: instance method of [<code>ElvishDate</code>](#ElvishDate)  
<a name="ElvishDate+setYen"></a>

### elvishDate.setYen(yen)
Sets the Yen value (> 0) for a specified date

**Kind**: instance method of [<code>ElvishDate</code>](#ElvishDate)  

| Param | Type |
| --- | --- |
| yen | <code>number</code> | 

<a name="ElvishDate+setLoa"></a>

### elvishDate.setLoa(loa)
Sets the Loa value (1-144) for a specified date

**Kind**: instance method of [<code>ElvishDate</code>](#ElvishDate)  

| Param | Type |
| --- | --- |
| loa | <code>number</code> | 

<a name="ElvishDate+setPeriod"></a>

### elvishDate.setPeriod(period)
Sets the Period value (0-8) for a specified date

**Kind**: instance method of [<code>ElvishDate</code>](#ElvishDate)  

| Param | Type |
| --- | --- |
| period | <code>number</code> | 

<a name="ElvishDate+setDayOfPeriod"></a>

### elvishDate.setDayOfPeriod(dayOfPeriod)
Sets the Day of Period value (1-based index, upper limit depends on Period)
for a specified date

**Kind**: instance method of [<code>ElvishDate</code>](#ElvishDate)  

| Param | Type |
| --- | --- |
| dayOfPeriod | <code>number</code> | 

<a name="ElvishDate+setTime"></a>

### elvishDate.setTime() ⇒ <code>number</code>
Sets the time in number of milliseconds since Yestarë, I 1, 00:00:00 (>= 0)
for a specified date.

**Kind**: instance method of [<code>ElvishDate</code>](#ElvishDate)  
<a name="ElvishDate+toString"></a>

### elvishDate.toString() ⇒ <code>string</code>
String representation of the specified date.

**Kind**: instance method of [<code>ElvishDate</code>](#ElvishDate)  
<a name="ElvishDate+toDate"></a>

### elvishDate.toDate() ⇒ <code>Date</code>
Get current ElvishDate as Date

**Kind**: instance method of [<code>ElvishDate</code>](#ElvishDate)  
<a name="ElvishDate.length"></a>

### ElvishDate.length ⇒ <code>number</code>
Number of arguments handled by constructor

**Kind**: static property of [<code>ElvishDate</code>](#ElvishDate)  
<a name="ElvishDate.fromDate"></a>

### ElvishDate.fromDate([...args]) ⇒ [<code>ElvishDate</code>](#ElvishDate)
Accepts same arguments as the standard Date constructor, or accepts a Date instance<br />
fromDate()<br />
fromDate(int)<br />
fromDate(dateString)<br />
fromDate(year, month[, day[, hours[, minutes[, seconds[, milliseconds]]]]])<br />
fromDate(Date)

**Kind**: static method of [<code>ElvishDate</code>](#ElvishDate)  

| Param | Type |
| --- | --- |
| [...args] | <code>number</code> \| <code>string</code> \| <code>Object</code> | 

<a name="ElvishDate.now"></a>

### ElvishDate.now() ⇒ <code>number</code>
Return the number of milliseconds since time 00:00:00 of Yestarë, I 1 (March 29, 1)

**Kind**: static method of [<code>ElvishDate</code>](#ElvishDate)  
