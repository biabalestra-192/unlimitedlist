const { supermarketQueue } = require('./supermarketQueue');

describe('supermarketQueue', () => {
    it('Deve retornar 12 ao receber [5,3,4] e 1', () => {
        expect(supermarketQueue([5, 3, 4], 1)).toBe(12);
    });

    it('Deve retornar 10 ao receber [10,2,3,3] e 2', () => {
        expect(supermarketQueue([10, 2, 3, 3], 2)).toBe(10);
    });

    it('Deve retornar 12 ao receber [2,3,10] e 2', () => {
        expect(supermarketQueue([2, 3, 10], 2)).toBe(12);
    });

    it('Deve retornar 10 ao receber [2,3,10] e 3', () => {
        expect(supermarketQueue([2, 3, 10], 3)).toBe(10);
    });

    it('Deve retornar 15 ao receber [2,5,4,7,2,9,3,6] e 3', () => {
        expect(supermarketQueue([2, 5, 4, 7, 2, 9, 3, 6], 3)).toBe(10);
    });
});
