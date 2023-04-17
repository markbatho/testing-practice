const {
    capitalize,
    reverseString,
    calculator,
    ceaserCipher,
    analyzeArray,
} = require('../src/main');

test('String should be capitalized', () => {
    expect(capitalize('some string')).toBe('Some string');
});

test('String should be reversed', () => {
    expect(reverseString('some string')).toBe('gnirts emos');
});

test('Calculator add operation', () => {
    expect(calculator.add(2, 2)).toBe(4);
});

test('Calculator subtract operation', () => {
    expect(calculator.subtract(4, 2)).toBe(2);
});

test('Calculator multiply operation', () => {
    expect(calculator.multiply(5, 5)).toBe(25);
});

test('Calculator divide operation', () => {
    expect(calculator.divide(8, 4)).toBe(2);
});

test('Ceaser Cipher lowercase shift 0', () => {
    expect(ceaserCipher('some string', 0)).toBe('some string');
});

test('Ceaser Cipher lowercase shift 5', () => {
    expect(ceaserCipher('some string', 5)).toBe('xtrj xywnsl');
});

test('Ceaser Cipher lowercase shift 30', () => {
    expect(ceaserCipher('some string', 30)).toBe('wsqi wxvmrk');
});

test('Ceaser Cipher uppercase shift 0', () => {
    expect(ceaserCipher('SOME STRING', 0)).toBe('SOME STRING');
});

test('Ceaser Cipher uppercase shift 5', () => {
    expect(ceaserCipher('SOME STRING', 5)).toBe('XTRJ XYWNSL');
});

test('Ceaser Cipher uppercase shift 30', () => {
    expect(ceaserCipher('SOME STRING', 30)).toBe('WSQI WXVMRK');
});

test('Ceaser Cipher Z to A wrapping', () => {
    expect(ceaserCipher('z', 1)).toBe('a');
});

test('Ceaser Cipher special characters and mixed case', () => {
    expect(ceaserCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
});

test('Analyze Array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toHaveProperty('average', 4);
    expect(analyzeArray([1,8,3,4,2,6])).toHaveProperty('min', 1);
    expect(analyzeArray([1,8,3,4,2,6])).toHaveProperty('max', 8);
    expect(analyzeArray([1,8,3,4,2,6])).toHaveProperty('length', 6);
});
