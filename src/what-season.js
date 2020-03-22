module.exports = function getSeason(date) {
    if (!date) {
        return 'Unable to determine the time of year!';
    }

    if (date.prototype !== new Date().prototype || !date.getUTCDate()) {
        throw new Error();
    }

    var date = new Date(date),
        timeYear = 0;

    timeYear = date.getMonth();

    if (timeYear >= 2 && timeYear <=4) {
      return 'spring';
    }
    if (timeYear >= 5 && timeYear <= 7) {
      return 'summer';
    }
    if (timeYear >= 8 && timeYear <= 10) {
        return 'autumn';
    }
    if (timeYear === 11 || (timeYear >= 0 && timeYear <= 1)) {
        return 'winter';
    }
};
