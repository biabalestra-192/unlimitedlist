const { makeNegative } = require("./makeNegative");

describe('Testes para a função makeNegative', () => {
    it('Deve retornar -42 quando passado -42', () => {
        expect(makeNegative(-42)).toBe(-42);
    });
    it('Deve retornar -9 quando passado 9', () => {
        expect(makeNegative(9)).toBe(-9);
    });
    it('Deve retornar 0 quando passado 0', () => {
        expect(makeNegative(0)).toBe(0);
    });
    it('Deve retornar -0.12 quando passado -0.12', () => {
        expect(makeNegative(-0.12)).toBe(-0.12);
        expect(makeNegative(-0.12)).not.toBe(0.12);
    })
});
