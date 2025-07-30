const { highestAndLowest } = require('./highestAndLowest');

describe('highestAndLowest', () => {
    it('Deve retornar "5 1" ao receber "1 2 3 4 5"', () => {
        expect(highestAndLowest('1 2 3 4 5')).toBe('5 1');
    });

    it('Deve retornar "5 -3" ao receber "1 2 -3 4 5"', () => {
        expect(highestAndLowest('1 2 -3 4 5')).toBe('5 -3');
    });

    it('Deve retornar "9 -5" ao receber "1 9 3 4 -5"', () => {
        expect(highestAndLowest('1 9 3 4 -5')).toBe('9 -5');
    });

    it('Deve retornar "13 -19" ao receber "-19 13"', () => {
        expect(highestAndLowest('-19 13')).toBe('13 -19');
    });

    it('Deve retornar "9 -5" ao receber "1 9 3 4 -5"', () => {
        expect(highestAndLowest('1 9 3 4 -5')).toBe('9 -5');
    });

    it('Deve retornar "9 -5" ao receber "1 9 3 4 -5"', () => {
        expect(highestAndLowest('1 9 3 4 -5')).toBe('9 -5');
    });
});
