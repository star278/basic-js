module.exports = function repeater(str, options) {
    var { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
    separator = separator || '+';
    additionSeparator = additionSeparator || '|';
    addition = (addition === null) ? 'null' : addition;

    const addStr = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
    return new Array(repeatTimes).fill(str + addStr).join(separator);
};
  