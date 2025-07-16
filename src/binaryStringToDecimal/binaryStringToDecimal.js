function binaryStringToDecimal(binary) {
    let power = 0;
    let sum = 0;
    for (let i = binary.length - 1; i >= 0; i -= 1) {
        if (binary[i] == 1) {
            sum += 2 ** power;
        }
        power += 1;
        // for (let j = 0; j < binary.length; j += 1) {
        //     // sum += binary[j];
        // }
    }
    return sum;
}

module.exports = { binaryStringToDecimal };
