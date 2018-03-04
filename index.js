function format(val, figure) {
    let valStr = `${val}`;
    for (let i = valStr.length; i < figure; i++) {
        valStr = `0${valStr}`;
    }
    return valStr;
}

const formatterBy = {
    year: date => {
        return format(date.getFullYear(), 4);
    },
    month: date => {
        return format(date.getMonth() + 1, 2);
    },
    day: date => {
        return format(date.getDate(), 2);
    },
    hour: date => {
        return format(date.getHours(), 2);
    },
    minute: date => {
        return format(date.getMinutes(), 2);
    },
    second: date => {
        return format(date.getSeconds(), 2);
    },
};

function date2obj(dateObject, options) {
    const date = dateObject || new Date();
    const fields = (options && options.fields) || Object.keys(formatterBy);

    let result = {};

    fields.forEach(field => {
        if (formatterBy[field]) {
            result[field] = formatterBy[field](date);
        }
    });

    return result;
}

module.exports = date2obj;