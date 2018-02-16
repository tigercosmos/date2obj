function format(val, figure) {
    let valStr = `${val}`;
    for (let i = valStr.length; i < figure; i++) {
        valStr = `0${valStr}`;
    }
    return valStr;
}

function date2obj(dateObject) {
    const date = dateObject || new Date();

    const year = format(date.getFullYear(), 4);
    const month = format(date.getMonth() + 1, 2);
    const day = format(date.getDate(), 2);
    const hour = format(date.getHours(), 2);
    const minute = format(date.getMinutes(), 2);
    const second = format(date.getSeconds(), 2);

    return {
        year,
        month,
        day,
        hour,
        minute,
        second
    };
}

module.exports = date2obj;