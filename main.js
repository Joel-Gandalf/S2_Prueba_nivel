import { validate, calculate } from "./src/fizzbuzz-logic.js";
import { show } from "./src/fizzbuzz-ui.js";

const action = document.getElementById('action-button');

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