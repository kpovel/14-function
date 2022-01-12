function calc(a, b, operator) {
    const isNotValid = (typeof a != 'number') || (typeof b != 'number');
    if (isNotValid) {
        return 'Error!'
    } else if (operator === 'sum') {
        return a + b
    } else if (operator === 'min') {
        return a - b
    } else if (operator === 'mult') {
        return a * b
    } else if (operator === 'div') {
        if (b === 0) {
            return 'Division by zero is impossible'
        } else {
            return a / b
        }
    } else {
        return 'Unknown operator'
    }
}

console.log(calc(9, 0, 'sum'))
