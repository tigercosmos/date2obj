# date2obj

[![Build Status](https://travis-ci.org/tigercosmos/date2obj.svg?branch=master)](https://travis-ci.org/tigercosmos/date2obj)
[![npm version](https://badge.fury.io/js/date2obj.svg)](https://badge.fury.io/js/date2obj)

Parse Date to Simple Object in JavaScript

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

## License

MIT
