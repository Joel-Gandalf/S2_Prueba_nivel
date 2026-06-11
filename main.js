const show = (id, toShow) => {
    document.getElementById(id).innerHTML = toShow; 
}

const validate = (number, valueInString) => {
    if (isNaN(number) || valueInString.trim() === ''){
        return false;
    }
    return true;
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
const history = [];

action.addEventListener('click', () => {

    const inputNumber = document.querySelector(`[data-input]`);
    const inputValueString = inputNumber.value;
    const inputNumberValue = Number(inputNumber.value);

    if (!validate(inputNumberValue, inputValueString)) {
        show('insertError', 'El valor ingresado no es válido');
        return;   
    }
    show('insertError', '');
    
    const result = calculate(inputNumberValue);
    acumulador += 'El número ingresado es: '+ inputNumberValue + ', resultado: ' + result + `<br>`;
    history.push({number: inputNumberValue, result: result});
    
    show('insertResult', acumulador);
});