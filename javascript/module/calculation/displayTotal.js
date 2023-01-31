import { capitalize, roundToDecimalPlace } from "./main";

function displayTotal(name, total) {
    return `${capitalize(name)} your total cost is ${roundToDecimalPlace(total)}`;
}

displayTotal('debasish', 20.83205978239058235);

export { displayTotal }