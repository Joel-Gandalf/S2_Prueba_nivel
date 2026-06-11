import {expect, test} from 'vitest'
import { calculate, calculate } from '../src/fizzbuzz-logic.js'

test('Si el número introducido es 9 el resultado esperado es Fizz', () => {
    const number = 9;
    const result = 'Fizz';

    const calc = calculate(number);
    
    expect(calc).toBe(result);
})

test('Si el número introducido es 10 el resultado esperado es Buzz', () => {
    const number = 10;
    const result = 'Buzz';

    const calc = calculate(number);
    
    expect(calc).toBe(result);
})

test('Si el número introducido es 15 el resultado esperado es FizzBuzz', () => {
    const number = 15;
    const result = 'FizzBuzz';

    const calc = calculate(number);
    
    expect(calc).toBe(result);
})

test('Si el número introducido es 7 el resultado esperado es 7', () => {
    const number = 7;
    const result = number;

    const calc = calculate(number);
    
    expect(calc).toBe(result);
})