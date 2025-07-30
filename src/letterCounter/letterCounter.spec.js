const { letterCounter } = require('./letterCounter');

describe('letterCounter', () => {
    it('Deve retornar 1 ao receber "Hello" e "h"', () => {
        expect(letterCounter('Hello', 'h')).toBe(1);
    });

    it('Deve retornar 1 ao receber "hello" e "h"', () => {
        expect(letterCounter('hello', 'h')).toBe(1);
    });

    it('Deve retornar 2 ao receber "hello" e "l"', () => {
        expect(letterCounter('hello', 'l')).toBe(2);
    });

    it('Deve retornar 0 ao receber "hello" e "z"', () => {
        expect(letterCounter('hello', 'z')).toBe(0);
    });

    it('Deve retornar 3 ao receber "jabuticaba" e "a"', () => {
        expect(letterCounter('jabuticaba', 'a')).toBe(3);
    });

    it('Deve retornar 3 ao receber "PaRaGuAi" e "a"', () => {
        expect(letterCounter('PaRaGuAi', 'a')).toBe(3);
    });

    it('Deve retornar 3 ao receber "arara" e "a"', () => {
        expect(letterCounter('arara', 'a')).toBe(3);
    });

    it('Deve retornar 2 ao receber "arara" e "r"', () => {
        expect(letterCounter('arara', 'r')).toBe(2);
    });
});
