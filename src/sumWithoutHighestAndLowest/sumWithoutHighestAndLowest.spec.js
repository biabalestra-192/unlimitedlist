const { sumWithoutHighestAndLowest } = require('./sumWithoutHighestAndLowest');

describe('sumWithoutHighestAndLowestNumber', () => {
    it('Deve retornar 0 ao receber null', () => {
        expect(sumWithoutHighestAndLowest(null)).toBe(0);
    });

    it('Deve retornar 0 ao receber []', () => {
        expect(sumWithoutHighestAndLowest([])).toBe(0);
    });

    it('Deve retornar 0 ao receber [3]', () => {
        expect(sumWithoutHighestAndLowest([3])).toBe(0);
    });

    it('Deve retornar 0 ao receber [3, 5]', () => {
        expect(sumWithoutHighestAndLowest([3, 5])).toBe(0);
    });

    it('Deve retornar 16 ao receber [6, 2, 1, 8, 10]', () => {
        expect(sumWithoutHighestAndLowest([6, 2, 1, 8, 10])).toBe(16);
    });

    it('Deve retornar 17 ao receber [0, 1, 6, 10, 10]', () => {
        expect(sumWithoutHighestAndLowest([0, 1, 6, 10, 10])).toBe(17);
    });

    it('Deve retornar -28 ao receber [-6, -20, -1, -10, -12]', () => {
        expect(sumWithoutHighestAndLowest([-6, -20, -1, -10, -12])).toBe(-28);
    });

    it('Deve retornar 3 ao receber [-6, 20, -1, 10, -12]', () => {
        expect(sumWithoutHighestAndLowest([-6, 20, -1, 10, -12])).toBe(3);
    });
});
