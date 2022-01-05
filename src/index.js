module.exports = function toReadable(number) {
    let oneCount = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    let otherCount = { 100: "hundred", 1000: "thousand" };

    if (number >= 0 && number < 20) {
        return oneCount[number];
    } else if (number >= 20 && number < 100 && number % 10 == 0) {
        return oneCount[number];
    } else if (number >= 20 && number < 100 && number % 10 != 0) {
        return `${oneCount[number - (number % 10)]} ${oneCount[number % 10]}`;
    } else if (number >= 100 && number < 1000 && number % 100 == 0) {
        return `${oneCount[Math.floor(number / 100)]} ${otherCount[100]}`;
    } else if (number >= 100 && number < 1000 && oneCount[number % 100]) {
        return `${oneCount[Math.floor(number / 100)]} ${otherCount[100]} ${
            oneCount[number % 100]
        }`;
    } else if (number >= 100 && number < 1000 && !oneCount[number % 100]) {
        return `${oneCount[Math.floor(number / 100)]} ${otherCount[100]} ${
            oneCount[(number % 100) - (number % 10)]
        } ${oneCount[number % 10]}`;
    }
};
