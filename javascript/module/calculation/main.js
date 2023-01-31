function getPower(x) {
    return 10 ** x;
}

function capitalize(x) {
    return x[0].toUpperCase() + x.slice(1);
}

function roundToDecimalPlace(n, x = 2) {
    const round = getPower(x);
    return Math.round(n * round) / round;
}

export { capitalize, roundToDecimalPlace };