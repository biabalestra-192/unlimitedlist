const { areaOrPerimeter } = require('./areaOrPerimeter');

describe('areaOrPerimeter', () => {
    it('Deve retornar a area correta de um quadrado 4x4', () => {
        expect(areaOrPerimeter(4, 4)).toBe(16);
    });

    it('Deve retornar a area correta de um quadrado 5x5', () => {
        expect(areaOrPerimeter(5, 5)).toBe(25);
    });

    it('Deve retornar a area correta de um quadrado 6x6', () => {
        expect(areaOrPerimeter(6, 6)).toBe(36);
    });

    it('Deve retornar a area correta de um quadrado 7x7', () => {
        expect(areaOrPerimeter(7, 7)).toBe(49);
    });

    it('Deve retornar a area correta de um quadrado 8x8', () => {
        expect(areaOrPerimeter(8, 8)).toBe(64);
    });

    it('Deve retornar a area correta de um quadrado 9x9', () => {
        expect(areaOrPerimeter(9, 9)).toBe(81);
    });

    it('Deve retornar a area correta de um quadrado 10x10', () => {
        expect(areaOrPerimeter(10, 10)).toBe(100);
    });

    it('Deve retornar o perímetro correta de um retângulo 4x5', () => {
        expect(areaOrPerimeter(4, 5)).toBe(18);
        expect(areaOrPerimeter(5, 4)).toBe(18);
    });

    it('Deve retornar o perímetro correta de um retângulo 6x5', () => {
        expect(areaOrPerimeter(6, 5)).toBe(22);
        expect(areaOrPerimeter(5, 6)).toBe(22);
    });

    it('Deve retornar o perímetro correta de um retângulo 26x34', () => {
        expect(areaOrPerimeter(26, 34)).toBe(120);
        expect(areaOrPerimeter(34, 26)).toBe(120);
    });

    it('Deve retornar o perímetro correta de um retângulo 467x5123', () => {
        expect(areaOrPerimeter(467, 5123)).toBe(11180);
        expect(areaOrPerimeter(5123, 467)).toBe(11180);
    });

    it('Deve retornar o perímetro correta de um retângulo 924x1259', () => {
        expect(areaOrPerimeter(924, 1259)).toBe(4366);
        expect(areaOrPerimeter(1259, 924)).toBe(4366);
    });

    it('Deve retornar o perímetro correta de um retângulo 370x610', () => {
        expect(areaOrPerimeter(370, 610)).toBe(1960);
        expect(areaOrPerimeter(610, 370)).toBe(1960);
    });

    it('Deve retornar o perímetro correta de um retângulo 1000x10000', () => {
        expect(areaOrPerimeter(1000, 10000)).toBe(22000);
        expect(areaOrPerimeter(10000, 1000)).toBe(22000);
    });
});
