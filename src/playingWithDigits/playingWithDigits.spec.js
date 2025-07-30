const { playingWithDigits } = require('./playingWithDigits');

describe('playingWithDigits', () => {
    it('Deve retornar 1 ao receber "89" e "1', () => {
        expect(playingWithDigits(89, 1)).toBe(1)
    });

    it('Deve retornar -1 ao receber "92" e "1', () => {
        expect(playingWithDigits(92, 1)).toBe(-1)
    });

    it('Deve retornar 2 ao receber "695" e "2', () => {
        expect(playingWithDigits(695, 2)).toBe(2)
    });

    it('Deve retornar 51 ao receber "46288" e "3', () => {
        expect(playingWithDigits(46288, 3)).toBe(51)
    });
});
