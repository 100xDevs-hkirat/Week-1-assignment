const format2digit = (value) => (value < 10 ? `0${value}` : value);

const getTime = () => {
    const dateTime = new Date();

    const hours = format2digit(dateTime.getHours());
    const minutes = format2digit(dateTime.getMinutes());
    const seconds = format2digit(dateTime.getSeconds());

    return `${hours}:${minutes}:${seconds} ${hours < 12 ? 'AM' : 'PM'}`;
};

const clock = () => {
    setInterval(() => {
        console.clear();
        console.log(getTime());
    }, 1000);
};

module.exports = { clock: clock, getTime: getTime };