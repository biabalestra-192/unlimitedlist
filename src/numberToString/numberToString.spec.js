const { numberToString } = require("./numberToString");

describe("numberToString", () => {
    test("converte um inteiro positivo para string", () => {
        expect(numberToString(42)).toBe("42");
    });

    test("converte zero para string", () => {
        expect(numberToString(0)).toBe("0");
    });

    test("converte número negativo para string", () => {
        expect(numberToString(-17)).toBe("-17");
    });

    test("converte número de ponto flutuante para string", () => {
        expect(numberToString(3.14)).toBe("3.14");
    });

    test("converte número em notação exponencial para string", () => {
        expect(numberToString(1e6)).toBe("1000000");
    });

    test('converte -0 para "0"', () => {
        expect(numberToString(-0)).toBe("0");
    });
});
