const { boolToWord } = require('./boolToWord')

describe('boolToWord', () => {
    test('retorna "Yes" quando receber true literal', () => {
        expect(boolToWord(true)).toBe('Yes')
    })

    test('retorna "No" quando receber false literal', () => {
        expect(boolToWord(false)).toBe('No')
    })
});
