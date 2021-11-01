function calc(a, b, operator) {
    let result;
    const isNotValid = (typeof a != 'number') || (typeof b != 'number');
    if (isNotValid) {
        result = 'Error!'
    } else if (!operator) {
        result = 'Unknown operator'
    } else if (operator === 'sum') {
        result = a + b
    } else if (operator === 'min') {
        result = a - b
    } else if (operator === 'multi') {
        result = a * b
    } else if (operator === 'divide') {
        if (b === 0) {
            result = 'Division by zero is imposible'
        } else {
            result = a / b
        }
    }
    return result;
}

let result = (calc(9, 0, 'divide'))
console.log(result);
