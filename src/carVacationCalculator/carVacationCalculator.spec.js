const { carVacationCalculator } = require('./carVacationCalculator');

describe('carVacationCalculator', () => {
    it.each([
        [40, 1],
        [120, 3],
        [180, 5],
        [260, 7],
        [320, 9],
        [360, 10],
        [760, 20],
        [960, 25],
    ])('Deve retornar R$ %i,00 ao alugar o carro por %i dias', (expected, input) => {
        expect(carVacationCalculator(input)).toBe(expected);
    });
});
