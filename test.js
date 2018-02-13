const date2json = require('./index');
const assert = require('assert');

function testjson(data1, data2) {
    for (item in data1) {
        assert.equal(data1[item], data2[item],
            `${item} not equeal: ${data1[item]} and ${data2[item]}`);
    }
}

const d1 = date2json(new Date(1518545575000));
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

const d2 = date2json(new Date(994269665000));
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