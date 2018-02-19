# date2obj

[![Build Status](https://travis-ci.org/tigercosmos/date2obj.svg?branch=master)](https://travis-ci.org/tigercosmos/date2obj)
[![npm version](https://badge.fury.io/js/date2obj.svg)](https://badge.fury.io/js/date2obj)
[![npm](https://img.shields.io/npm/dt/date2obj.svg?style=flat-square)](https://www.npmjs.com/package/date2obj)
[![Greenkeeper badge](https://badges.greenkeeper.io/tigercosmos/date2obj.svg)](https://greenkeeper.io/)

Parse Date to Simple Object in JavaScript

:collision: **Zero dependencies**

## Usage
```bash
npm i date2obj --save
```
```js
date2obj() // Get current time
date2obj(new Date()) // Equal to the first one
date2obj(new Date(1518545575000)) // Put Date object in the function to get that time
```

```js
const date2obj = require('date2obj');

const currentTime = date2obj();
console.log(currentTime);
// Local time
// {
//   year: 'YYYY',
//   month: 'MM',
//   day: 'DD',
//   hour: 'HH',
//   minute: 'mm',
//   second: 'SS'
// }

const otherTime = date2obj(new Date(1518545575000));
console.log(otherTime);
// Local time with the epoch
// {
//   year: "2018",
//   month: "02",
//   day: "14",
//   hour: "02",
//   minute: "12",
//   second: "55"
// }
```
## Configuration Options
usage with options
```js
date2obj(dateObject [, options])
```
### fields
default: `['year', 'month', 'day', 'hour', 'minute', 'second']`

usage example:
```js
const otherTime = date2obj(new Date(1518545575000), {
  fields: ['hour', 'minute', 'second']
});
console.log(otherTime);
// Local time with the epoch
// {
//   hour: "02",
//   minute: "12",
//   second: "55"
// }
```

## License

MIT
