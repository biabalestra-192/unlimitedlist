const { willHeroSurvive } = require('./willHeroSurvive');

describe('willHeroSurvive', () => {
    it('Deve retornar "true" caso a quantidade de balas seja o suficiente', () => {
        expect(willHeroSurvive(10, 5)).toBe(true);
        expect(willHeroSurvive(100, 40)).toBe(true);
    });

    it('Deve retornar "false" caso a quantidade de balas não seja o suficiente', () => {
        expect(willHeroSurvive(7, 4)).toBe(false);
        expect(willHeroSurvive(4, 5)).toBe(false);
        expect(willHeroSurvive(1500, 751)).toBe(false);
        expect(willHeroSurvive(0, 1)).toBe(false);
    });
});
