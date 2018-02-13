# date2json

Parse Date to Json in JavaScript

## Usage

```bash
npm i date2json --save
```

```js
data2json() // Get current time
data2json(new Date(1518545575000)) // Put Date object in the function to get that time
```

```js
const date2json = require('date2json');

conat currentTime = data2json();
console.log(currentTime);
// {
//   year: 'YYYY',
//   month: 'MM',
//   day: 'DD',
//   hour: 'HH',
//   minute: 'mm',
//   second: 'SS'
// }

const otherTime = date2json(new Date(1518545575000));
console.log(otherTime);
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
