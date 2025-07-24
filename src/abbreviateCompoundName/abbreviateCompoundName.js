function abbreviateCompoundName(name) {
    let array = name.split(' ');
    if (array.length > 1) {
        for (let i = 0; i < name.length; i += 1) {
            let str = array[0][0] + '.' + array[array.length - 1][0];
            return str.toUpperCase();
        }
    } else if (name == '') {
        return '';
    } else if (array.length === 1) {
        return array[0][0];
    }
}

module.exports = {
    abbreviateCompoundName,
};
