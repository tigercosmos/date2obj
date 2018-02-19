function format(val, figure) {
    let valStr = `${val}`;
    for (let i = valStr.length; i < figure; i++) {
        valStr = `0${valStr}`;
    }
    return valStr;
}

const formatterBy = {
    year: format(date.getFullYear(), 4),
    month: format(date.getMonth() + 1, 2),
    day: format(date.getDate(), 2),
    hour: format(date.getHours(), 2),
    minute: format(date.getMinutes(), 2),
    second: format(date.getSeconds(), 2),
};

function date2obj(dateObject, neededFields) {
    const date = dateObject || new Date();
    const fields = neededFields || Object.keys(formatterBy);

    let result;

    fields.forEach(function(field) {
        if (formatterBy[field]) {
            result[field] = formatterBy[field](dateObject);
        }
    });

    return result;
}

module.exports = date2obj;