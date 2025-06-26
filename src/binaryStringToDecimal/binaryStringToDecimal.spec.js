const { binaryStringToDecimal } = require('./binaryStringToDecimal');
describe('binaryStringToDecimal', () => {
    test('retorna 0 quando receber "0"', () => {
        expect(binaryStringToDecimal("0")).toBe(0);
    });

    test('retorna 1 quando receber "1"', () => {
        expect(binaryStringToDecimal("1")).toBe(1);
    });

    test('retorna 2 quando receber "10"', () => {
        expect(binaryStringToDecimal("10")).toBe(2);
    });

    test('retorna 3 quando receber "11"', () => {
        expect(binaryStringToDecimal("11")).toBe(3);
    });

    test('retorna 4 quando receber "100"', () => {
        expect(binaryStringToDecimal("100")).toBe(4);
    });

    test('retorna 5 quando receber "101"', () => {
        expect(binaryStringToDecimal("101")).toBe(5);
    });

    test('retorna 6 quando receber "110"', () => {
        expect(binaryStringToDecimal("110")).toBe(6);
    });

    test('retorna 7 quando receber "111"', () => {
        expect(binaryStringToDecimal("111")).toBe(7);
    });

    test('retorna 8 quando receber "1000"', () => {
        expect(binaryStringToDecimal("1000")).toBe(8);
    });

    test('retorna 9 quando receber "1001"', () => {
        expect(binaryStringToDecimal("1001")).toBe(9);
    });

    test('retorna 10 quando receber "1010"', () => {
        expect(binaryStringToDecimal("1010")).toBe(10);
    });

    test('retorna 11 quando receber "1011"', () => {
        expect(binaryStringToDecimal("1011")).toBe(11);
    });

    test('retorna 12 quando receber "1100"', () => {
        expect(binaryStringToDecimal("1100")).toBe(12);
    });

    test('retorna 13 quando receber "1101"', () => {
        expect(binaryStringToDecimal("1101")).toBe(13);
    });

    test('retorna 14 quando receber "1110"', () => {
        expect(binaryStringToDecimal("1110")).toBe(14);
    });

    test('retorna 15 quando receber "1111"', () => {
        expect(binaryStringToDecimal("1111")).toBe(15);
    });
});
