const { growthOfPopulation } = require('./growthOfPopulation');

describe('growthOfPopulation', () => {
  it('deve retornar 3 anos para população inicial 1000, taxa 2%, 50 novos habitantes, alvo 1200', () => {
    expect(growthOfPopulation(1000, 2, 50, 1200)).toBe(3);
  });

  it('deve retornar 15 anos para população inicial 1500, taxa 5%, 100 novos habitantes, alvo 5000', () => {
    expect(growthOfPopulation(1500, 5, 100, 5000)).toBe(15);
  });

  it('deve retornar 0 anos se a população inicial já é igual ao alvo', () => {
    expect(growthOfPopulation(2000, 10, 50, 2000)).toBe(0);
  });

  it('deve retornar 1 ano se a população inicial + crescimento atinge o alvo em 1 ano', () => {
    expect(growthOfPopulation(1000, 10, 0, 1100)).toBe(1);
  });

  it('deve retornar 0 anos se a população inicial já é maior que o alvo', () => {
    expect(growthOfPopulation(1200, 2, 50, 1000)).toBe(0);
  });
});
