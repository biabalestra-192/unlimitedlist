// Enunciado: https://www.codewars.com/kata/5ab6538b379d20ad880000ab/javascript
function areaOrPerimeter(height, width) {
    if (height === width) {
        return height * width;
    } else {
        return 2 * (height + width);
    }
}
module.exports = {
    areaOrPerimeter,
};
