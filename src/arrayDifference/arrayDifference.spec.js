const { arrayDifference } = require('./arrayDifference');

describe('arrayDifference', () => {
    it('Deve retornar M ao receber J e K', () => {
        expect(arrayDifference([1, 2], [1])).toEqual([2]);
    });

    it('Deve retornar M ao receber J e K', () => {
        expect(arrayDifference([1, 2, 2], [1])).toEqual([2, 2]);
    });

    it('Deve retornar M ao receber J e K', () => {
        expect(arrayDifference([1, 2, 2], [2])).toEqual([1]);
    });

    it('Deve retornar M ao receber J e K', () => {
        expect(arrayDifference([1, 2, 2], [])).toEqual([1, 2, 2]);
    });

    it('Deve retornar M ao receber J e K', () => {
        expect(arrayDifference([], [1, 2])).toEqual([]);
    });

    it('Deve retornar M ao receber J e K', () => {
        expect(arrayDifference([1, 2, 3], [1, 2])).toEqual([3]);
    });
});
