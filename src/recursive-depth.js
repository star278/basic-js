module.exports = class DepthCalculator {
    calculateDepth(arr, result = 1, current = 1) {
        arr.forEach( (item) => {
            if (Array.isArray(item)) {
            current++;
            if (result < current)
                result++;
            result = Math.max(this.calculateDepth(item, result, current), result);
            current--;
        }
    });
        return result;
    }
};