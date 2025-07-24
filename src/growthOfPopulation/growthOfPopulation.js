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
