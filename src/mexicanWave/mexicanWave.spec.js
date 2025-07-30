const { mexicanWave } = require('./mexicanWave');

describe('mexicanWave', () => {
    it('Deve fazer uma onda com os caracteres de uma string', () => {
        const result = mexicanWave('hello');

        expect(result[0]).toBe('Hello');
        expect(result[1]).toBe('hEllo');
        expect(result[2]).toBe('heLlo');
        expect(result[3]).toBe('helLo');
        expect(result[4]).toBe('hellO');
    });

    it('Deve fazer uma onda ignorando espaços', () => {
        const result = mexicanWave(' s p a c e s ');

        expect(result[0]).toBe(' S p a c e s ');
        expect(result[1]).toBe(' s P a c e s ');
        expect(result[2]).toBe(' s p A c e s ');
        expect(result[3]).toBe(' s p a C e s ');
        expect(result[4]).toBe(' s p a c E s ');
        expect(result[5]).toBe(' s p a c e S ');
    });
});
