export const validate = (number, valueInString) => {
    if (isNaN(number) || valueInString.trim() === ''){
        return false;
    }
    return true;
}

export const calculate = (number) => {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz';
    }

    if (number % 3 === 0) {
        return 'Fizz';
    }

    if (number % 5 === 0) {
        return 'Buzz';
    }
    return number;
}