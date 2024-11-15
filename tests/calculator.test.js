const calculator = require('../src/calculator.js');

test('adds two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(-1, -1)).toBe(-2);
    expect(calculator.add(0, 0)).toBe(0);
});

test('subtracts one number from another', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(-1, -1)).toBe(0);
    expect(calculator.subtract(0, 0)).toBe(0);
});

test('multiplies two numbers', () => {
    expect(calculator.multiply(3, 4)).toBe(12);
    expect(calculator.multiply(-1, -1)).toBe(1);
    expect(calculator.multiply(-1, 1)).toBe(-1);
    expect(calculator.multiply(0, 100)).toBe(0);
});

test('divides one number by another', () => {
    expect(calculator.divide(8, 2)).toBe(4);
    expect(calculator.divide(10, -2)).toBe(-5);
    expect(calculator.divide(-10, -2)).toBe(5);
});

test('throws error when dividing by zero', () => {
    expect(() => calculator.divide(5, 0)).toThrow("Cannot divide by zero");
});