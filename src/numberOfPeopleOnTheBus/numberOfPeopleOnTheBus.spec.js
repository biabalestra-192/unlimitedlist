const { numberOfPeopleOnTheBus } = require('./numberOfPeopleOnTheBus');

describe('numberOfPeopleOnTheBus', () => {
    it('Nenhuma pessoa entra ou sai do ônibus', () => {
        expect(numberOfPeopleOnTheBus([[0, 0]])).toBe(0);
    });

    it('5 pessoas entram, 3 saem', () => {
        expect(numberOfPeopleOnTheBus([[5, 3]])).toBe(2);
    });

    it('10 pessoas entram, 5 saem', () => {
        expect(numberOfPeopleOnTheBus([[10, 5]])).toBe(5);
    });

    it('5 pessoas entram, 5 saem, depois 3 entram', () => {
        expect(numberOfPeopleOnTheBus([[5, 5], [3, 0]])).toBe(3);
    });

    it('10 pessoas entram em cada parada', () => {
        expect(
            numberOfPeopleOnTheBus([[10, 0], [10, 0], [10, 0], [10, 0]]),
        ).toBe(40);
    });

    it('5 pessoas entram, 3 saem, depois 7 pessoas entram', () => {
        expect(
            numberOfPeopleOnTheBus([[5, 3], [7, 0]]),
        ).toBe(9);
    });

    it('10 entram, ninguém sai, depois 10 saem', () => {
        expect(
            numberOfPeopleOnTheBus([[10, 0], [0, 10]]),
        ).toBe(0);
    });

    it('O ônibus vai ficando mais vazio com o tempo', () => {
        expect(
            numberOfPeopleOnTheBus([[10, 5], [5, 5], [0, 5]]),
        ).toBe(0);
    });

    it('Entrada e saída alternadas de pessoas', () => {
        expect(
            numberOfPeopleOnTheBus([[5, 3], [0, 0], [2, 0], [0, 2]]),
        ).toBe(2);
    });

    it('Várias paradas e entradas/saídas de pessoas', () => {
        expect(
            numberOfPeopleOnTheBus([[20, 5], [5, 0], [10, 10], [2, 8], [3, 0]]),
        ).toBe(17);
    });
});
