const { findNextSquare } = require('./findNextSquare');

describe('findNextSquare', () => {
    it('Deve retornar 121 ao receber 100', () => {
        expect(findNextSquare(100)).toBe(121)
    });

    it('Deve retornar 4 ao receber 1', () => {
        expect(findNextSquare(1)).toBe(4)
    });

    it('Deve retornar 64 ao receber 49', () => {
        expect(findNextSquare(49)).toBe(64)
    });

    it('Deve retornar -1 ao receber 50', () => {
        expect(findNextSquare(50)).toBe(-1)
    });
});
