const analyzeArray = require('../src/analyzeArray.js');

test('Testing an array with a mixture of positive and negative integers', () => {
    const input = [1, -1, 3, 10, -20];
    const expectedOutput = {
        average: -1.4,
        min: -20,
        max: 10,
        length: 5
    };
    expect(analyzeArray(input)).toEqual(expectedOutput);
});

test('Testing with an empty array', () => {
    const input = [];
    const expectedOutput = {
        average: null,  
        min: null,
        max: null,
        length: 0
    };
    expect(analyzeArray(input)).toEqual(expectedOutput);
});

test('Testing with only positive numbers', () => {
    const input = [1, 1, 3, 10, 20, 60];
    const expectedOutput = {
        average: 15.83,
        min: 1,
        max: 60,
        length: 6
    };
    expect(analyzeArray(input)).toEqual(expectedOutput);
});

test('Testing with only negative numbers', () => {
    const input = [-5, -15, -3, -8];
    const expectedOutput = {
        average: -7.75,
        min: -15,
        max: -3,
        length: 4
    };
    expect(analyzeArray(input)).toEqual(expectedOutput);
});

test('Testing with only a single element', () => {
    const input = [42];
    const expectedOutput = {
        average: 42,
        min: 42,
        max: 42,
        length: 1
    };
    expect(analyzeArray(input)).toEqual(expectedOutput);
});

test('Testing with very large numbers', () => {
    const input = [1000000, 5000000, 10000000];
    const expectedOutput = {
        average: 5333333.33,
        min: 1000000,
        max: 10000000,
        length: 3
    };
    expect(analyzeArray(input)).toEqual(expectedOutput);
});

test('Testing with decimal values', () => {
    const input = [1.5, 2.5, 3.5];
    const expectedOutput = {
        average: 2.5,
        min: 1.5,
        max: 3.5,
        length: 3
    };
    expect(analyzeArray(input)).toEqual(expectedOutput);
});

test('Testing with uniform values', () => {
    const input = [7, 7, 7, 7];
    const expectedOutput = {
        average: 7,
        min: 7,
        max: 7,
        length: 4
    };
    expect(analyzeArray(input)).toEqual(expectedOutput);
});

test('Testing with mixed number types', () => {
    const input = [1, 2.5, 3];
    const expectedOutput = {
        average: 2.17,
        min: 1,
        max: 3,
        length: 3
    };
    expect(analyzeArray(input)).toEqual(expectedOutput);
});

test('Testing with non-numeric values', () => {
    const input = [1, 'two', 3];
    const expectedOutput = {
        average: null,  
        min: null,
        max: null,
        length: null  
    };
    expect(() => analyzeArray(input)).toThrow('Invalid Input');
});