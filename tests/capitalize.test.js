const capitalize = require('../src/capitalize.js');

test('capitalizes the first letter of a typical lowercase string', () => {
    const input = "hello";
    const expectedOutput = "Hello";
    expect(capitalize(input)).toBe(expectedOutput);
});

test('ensures the function handles an empty string correctly, returning an empty string without errors', () => {
    const input = "";
    const expectedOutput = "";
    expect(capitalize(input)).toBe(expectedOutput);
});

test('Tests a string that is already capitalized to check for alteration', () => {
    const input = "Hello";
    const expectedOutput = "Hello";
    expect(capitalize(input)).toBe(expectedOutput);
});

test('Input a string that starts with a non-letter character', () => {
    const input = "@hello";
    const expectedOutput = "@Hello";
    expect(capitalize(input)).toBe(expectedOutput);
});

test('Test a string in all uppercase to ensure that there is no alteration', () => {
    const input = "HELLO";
    const expectedOutput = "HELLO";
    expect(capitalize(input)).toBe(expectedOutput);
});

test('Provide a string with mixed case to ensure that only the first character is edited', () => {
    const input = "hElLo";
    const expectedOutput = "HElLo";
    expect(capitalize(input)).toBe(expectedOutput);
});
