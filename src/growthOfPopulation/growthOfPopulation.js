// Enunciado: https://www.codewars.com/kata/563b662a59afc2b5120000c6/javascript
function growthOfPopulation(
    initialPopulation,
    growthRate,
    newPeople,
    targetPopulation,
) {
    let n = 0;
    let final = initialPopulation;
    while (final < targetPopulation) {
        final = final + final * (growthRate / 100) + newPeople;
        n += 1;
    }
    return n;
}

module.exports = {
    growthOfPopulation,
};
