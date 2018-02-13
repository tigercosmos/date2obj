function format(val, figure) {
    return val < 10 * (figure - 1) ? `0${val}` : `${val}`;
}

function date2json(dateObject) {
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

module.exports = date2json;