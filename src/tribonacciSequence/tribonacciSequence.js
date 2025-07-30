// Enunciado: https://www.codewars.com/kata/556deca17c58da83c00002db/javascript
function tribonacciSequence(signature, n) {
    if (n === 0) {
        return [];
    }
    if (n === 1) {
        return [signature[0]];
    }
    if (n === 2) {
        return [signature[0], signature[1]];
    }
    for (let i = 3; i < n; i++) {
        signature.push(signature[i - 1] + signature[i - 2] + signature[i - 3]);
    }
    return signature;
}

module.exports = {
    tribonacciSequence,
};
