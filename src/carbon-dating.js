const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    var sampleActivityNumber = parseFloat(sampleActivity, 10);
    if (!sampleActivity || sampleActivityNumber <= 0 || typeof sampleActivity !== 'string' || sampleActivityNumber >= MODERN_ACTIVITY || !isFinite(sampleActivityNumber)) {
        return false;
    }
    var k = 0.693 / HALF_LIFE_PERIOD;
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNumber) / k);
};
