const { buildPyramid } = require('./buildPyramid');

describe('buildPyramid', () => {
    it('Deve criar uma pirâmide de 1 de altura', () => {
        expect(buildPyramid(1)).toBe('*')
    });

    it('Deve criar uma pirâmide de 2 de altura', () => {
        expect(buildPyramid(2)).toBe(' * \n***')
    });

    it('Deve criar uma pirâmide de 3 de altura', () => {
        expect(buildPyramid(3)).toBe('  *  \n *** \n*****')
    });

    it('Deve criar uma pirâmide de 4 de altura', () => {
        expect(buildPyramid(4)).toBe('   *   \n  ***  \n ***** \n*******')
    });

    it('Deve criar uma pirâmide de 5 de altura', () => {
        expect(buildPyramid(5)).toBe('    *    \n   ***   \n  *****  \n ******* \n*********')
    });
});
