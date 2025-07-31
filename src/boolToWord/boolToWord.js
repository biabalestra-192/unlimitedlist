// Enunciado: https://www.codewars.com/kata/53369039d7ab3ac506000467/javascript
function boolToWord(bool) {
    if (bool == true) {
        return 'Yes';
    } else if (bool == false) {
        return 'No';
    }
}

module.exports = {
    boolToWord,
};
