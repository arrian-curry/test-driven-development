const caesarCipher = require('../src/caesarCipher.js');

test('shifts alphabet characters correctly with positive shift', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
    expect(caesarCipher('xyz', 3)).toBe('abc');  
});

test('maintains the same case', () => {
    expect(caesarCipher('Abc', 1)).toBe('Bcd');
    expect(caesarCipher('XyZ', 3)).toBe('AbC');  
});

test('does not change punctuation and spaces', () => {
    expect(caesarCipher('hello, world!', 5)).toBe('mjqqt, btwqi!');
});

test('shifts alphabet characters correctly with negative shift', () => {
    expect(caesarCipher('bcd', -1)).toBe('abc');
    expect(caesarCipher('abc', -3)).toBe('xyz');  
});

test('can handle large shifts', () => {
    expect(caesarCipher('abc', 26)).toBe('abc');  
    expect(caesarCipher('abc', 52)).toBe('abc');  
});
