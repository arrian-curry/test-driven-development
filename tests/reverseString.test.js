const reverseString = require('../src/reverseString.js');

test('should reverse a standard string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('should handle an empty string', () => {
    expect(reverseString('')).toBe('');
});

test('should reverse a string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('should reverse a string with special characters', () => {
    expect(reverseString('hello!')).toBe('!olleh');
});

test('should reverse a string with uppercase and lowercase letters', () => {
    expect(reverseString('Hello')).toBe('olleH');
});

test('should reverse a palindrome string', () => {
    expect(reverseString('madam')).toBe('madam');
});

test('should reverse a string with numbers and letters', () => {
    expect(reverseString('abc123')).toBe('321cba');
});