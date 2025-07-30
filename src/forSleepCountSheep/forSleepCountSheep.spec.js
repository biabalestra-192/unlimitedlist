const { forSleepCountSheep } = require('./forSleepCountSheep');

describe('forSleepCountSheep', () => {
    it('Deve retornar 1 ovelhas caso receba 1', () => {
        expect(forSleepCountSheep(1)).toBe('1 sheep...');
    });

    it('Deve retornar 2 ovelhas caso receba 2', () => {
        expect(forSleepCountSheep(2)).toBe('1 sheep...2 sheep...');
    });

    it('Deve retornar 3 ovelhas caso receba 3', () => {
        expect(forSleepCountSheep(3)).toBe('1 sheep...2 sheep...3 sheep...');
    });

    it('Deve retornar 4 ovelhas caso receba 4', () => {
        expect(forSleepCountSheep(4)).toBe(
            '1 sheep...2 sheep...3 sheep...4 sheep...',
        );
    });

    it('Deve retornar 5 ovelhas caso receba 5', () => {
        expect(forSleepCountSheep(5)).toBe(
            '1 sheep...2 sheep...3 sheep...4 sheep...5 sheep...',
        );
    });

    it('Deve retornar 6 ovelhas caso receba 6', () => {
        expect(forSleepCountSheep(6)).toBe(
            '1 sheep...2 sheep...3 sheep...4 sheep...5 sheep...6 sheep...',
        );
    });
});
