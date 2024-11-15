const calculator = {
    add: function(number1, number2) {
        return number1 + number2;
    },
    subtract: function(number1, number2) {
        return number1 - number2;
    },
    multiply: function(number1, number2) {
        return number1 * number2;
    },
    divide: function(number1, number2) {
        if (number2 === 0) {
            throw new Error("Cannot divide by zero");
        }
        return number1 / number2;
    }
};

module.exports = calculator;