function capitalize(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
    const strArr = string.split('');
    const reversed = [];

    for (let i = strArr.length; i >= 0; i--) {
        reversed.push(strArr[i]);
    }

    return reversed.join('');
}

const calculator = {
    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    divide(a, b) {
        return a / b;
    },

    multiply(a, b) {
        return a * b;
    },
};

function ceaserCipher(string, shift) {
    if (shift === 0) return string;

    const minLCaseLetter = 97;
    const maxLCaseLetter = 122;
    const minUCaseLetter = 65;
    const maxUCaseLetter = 90;
    const mod = 26;

    const encodedCharArray = Array.from(string).map((val, index) => {
        const charCode = string.charCodeAt(index);
        const char = val.charCodeAt(0);

        // Lowercase checks
        if (charCode >= minLCaseLetter && charCode <= maxLCaseLetter) {
            return ((char - minLCaseLetter + shift) % mod) + minLCaseLetter;
        }

        // Uppercase checks
        if (charCode >= minUCaseLetter && charCode <= maxUCaseLetter) {
            return ((char - minUCaseLetter + shift) % mod) + minUCaseLetter;
        }

        // Non-letter chars
        return char;
    });

    return encodedCharArray.map(val => String.fromCharCode(val)).join('');
}

function analyzeArray(array) {
    const average = array.reduce((prev, next) => prev + next) / array.length;
    const min = Math.min(...array);
    const max = Math.max(...array);
    const length = array.length;
    return { average, min, max, length };
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    ceaserCipher,
    analyzeArray,
};
