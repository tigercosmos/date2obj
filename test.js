const date2json = require('./index');
const assert = require('assert');

function testjson(data1, data2) {
    for (item in data1) {
        assert.equal(data1[item], data2[item],
            `${item} not equeal: ${data1[item]} and ${data2[item]}`);
    }
}

let date1 = new Date(1518545575000);
const utc1 = date1.getTime() + (date1.getTimezoneOffset() * 60000);
date1 = new Date(utc1 + (3600000 * 8));
const d1 = date2json(new Date(date1));
testjson(
    d1, {
        year: "2018",
        month: "02",
        day: "14",
        hour: "02",
        minute: "12",
        second: "55"
    }
);

let date2 = new Date(994269665000);
const utc2 = date2.getTime() + (date2.getTimezoneOffset() * 60000);
date2 = new Date(utc2 + (3600000 * 8));
const d2 = date2json(new Date(date2));
testjson(
    d2, {
        year: "2001",
        month: "07",
        day: "05",
        hour: "02",
        minute: "01",
        second: "05"
    }
);

console.log(date2json());