module.exports = function toReadable(number) {
    let numberHundreds = Math.floor(number / 100);
    let ten = number - numberHundreds * 100;
    let numberTens = Math.floor(ten / 10);
    let numberOnes = ten - numberTens * 10;
    let resultHundreds = digitName(numberHundreds);
    if (resultHundreds === "") {
        resultHundreds = resultHundreds;
    } else {
        resultHundreds = `${resultHundreds} hundred`;
    };
    let resultTens = digitNameTens(numberTens);
    let resultOnes = digitName(numberOnes);
if (numberTens === 1) {
    resultOnes = '';
} else {resultOnes = resultOnes};
    let results = '';
    if (number === 0) {
        results = 'zero';
    } else if (number < 20 & number > 9) {
        results = a(number);
    } else if (results = `${resultHundreds} ${resultTens} ${resultOnes}`) {
    return results.trim()};

function digitName(digit) {
    if (digit === 1) {
        return "one"
    } else if (digit === 2) {
        return "two";
    } else if (digit === 3) {
        return "three";
    } else if (digit === 4) {
        return "four";
    } else if (digit === 5) {
        return "five";
    } else if (digit === 6) {
        return "six";
    } else if (digit === 7) {
        return "seven";
    } else if (digit === 8) {
        return "eight";
    } else if (digit === 9) {
        return "nine";
    } else {
        return '';
    }
};

function digitNameTens(digit) {
    if (digit === 1) {
        a(numberOnes) 
    } else if (digit === 2) {
        return "twenty";
    } else if (digit === 3) {
        return "thirty";
    } else if (digit === 4) {
        return "forty";
    } else if (digit === 5) {
        return "fifty";
    } else if (digit === 6) {
        return "sixty";
    } else if (digit === 7) {
        return "seventy";
    } else if (digit === 8) {
        return "eighty";
    } else if (digit === 9) {
        return "ninety";
    } else {
        return '';
    }
};

function a (digit) {
    if (digit === 0) {
        return 'ten';
    } else if (digit === 1) {
        return "eleven";
    } else if (digit === 2) {
        return "twelve";
    } else if (digit === 3) {
        return "thirteen";
    } else if (digit === 4) {
        return "fourteen";
    } else if (digit === 5) {
        return "fifteen";
    } else if (digit === 6) {
        return "sixteen";
    } else if (digit === 7) {
        return "seventeen";
    } else if (digit === 8) {
        return "eighteen";
    } else if (digit === 9) {
        return "ninteen";
    }
}};
