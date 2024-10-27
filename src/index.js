const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let morseCode = '';

    for (let i = 0; i < expr.length; i += 2) {
        let symbol = expr.slice(i, i + 2);

        if (i % 10 === 0 && i !== 0) {
            if (morseCode) {
                result += MORSE_TABLE[morseCode];
                morseCode = '';
            }
            if (symbol === '**') {
                result += ' ';
                i += 8;
                continue;
            }
        }
        if (symbol === '10') morseCode += '.';
        else if (symbol === '11') morseCode += '-';
    }
    if (morseCode) {
        result += MORSE_TABLE[morseCode];
    }
    return result;
}

module.exports = {
    decode
}