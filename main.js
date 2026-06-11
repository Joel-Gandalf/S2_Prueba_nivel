const show = (id, toShow) => {
    document.getElementById(id).innerHTML = toShow; 
}

const calculate = (number) => {
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

const action = document.getElementById('action-button');
// const insertError = document.getElementById('insertError');
// const insertResult = document.getElementById('insertResult');
let acumulador = '';

action.addEventListener('click', () => {

    const inputNumber = document.querySelector(`[data-input]`);
    const inputNumberValue = Number(inputNumber.value);
    
    const result = calculate(inputNumberValue);
    acumulador += result + `<br>`
    
    show('insertResult', acumulador);

})