function makeNegative(num) {
    if (num <= 0) {
        return num;
    } else {
        return -num;
    }
}

module.exports = {
    makeNegative,
};
