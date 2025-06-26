const { abbreviateCompoundName } = require("./abbreviateCompoundName")

describe("Testes para a função abbreviateCompoundName", () => {
    it("Deve retornar 'S.H' quando passado 'Sam Harris'", () => {
        expect(abbreviateCompoundName("Sam Harris")).toBe("S.H");
    });

    it("Deve retornar 'P.F' quando passado 'Patrick Feenan'", () => {
        expect(abbreviateCompoundName("Patrick Feenan")).toBe("P.F");
    });

    it("Deve retornar 'E.C' quando passado 'Evan Cole'", () => {
        expect(abbreviateCompoundName("Evan Cole")).toBe("E.C");
    });

    it("Deve retornar 'P.F' quando passado 'P Favuzzi'", () => {
        expect(abbreviateCompoundName("P Favuzzi")).toBe("P.F");
    });

    it("Deve retornar 'D.M' quando passado 'David Mendieta'", () => {
        expect(abbreviateCompoundName("David Mendieta")).toBe("D.M");
    });

    it("Deve retornar uma string vazia quando a entrada estiver vazia", () => {
        expect(abbreviateCompoundName("")).toBe("");
    });

    it("Deve manipular entrada de nome único", () => {
        expect(abbreviateCompoundName("John")).toBe("J");
    });

    it("Deve lidar com nomes com vários espaços", () => {
        expect(abbreviateCompoundName("John   Doe")).toBe("J.D");
    });

    it("Deve lidar com nomes com letras minúsculas", () => {
        expect(abbreviateCompoundName("john doe")).toBe("J.D");
    });

    it("Deve lidar com nomes com números", () => {
        expect(abbreviateCompoundName("John2 Doe3")).toBe("J.D");
    });

    it("Deve lidar com nomes de três palavras", () => {
        expect(abbreviateCompoundName("John van Doe")).toBe("J.D");
    });
});
