function caesarCipher(str, shift) {
    shift = shift % 26;
    return str.replace(/[a-z]/gi, (char) => {
        let base = char >= 'a' && char <= 'z' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
        let newCharCode = (char.charCodeAt(0) - base + shift + 26) % 26 + base;
        return String.fromCharCode(newCharCode);
    });
}

module.exports = caesarCipher;
