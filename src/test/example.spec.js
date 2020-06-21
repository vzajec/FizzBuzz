
var assert = require('assert');
const fizzBuzz = require("../fizzBuzz");

describe('FizzBuzz problem', () => {
describe('Testing modules', () =>{
       
        it('FizzBuzz bi trebala biti funkcija', () => {
            fizzBuzz.start();
        });
        
        it('Broj dijeljiv sa 3 daje "Fizz"', () => {
            assert.equal("Fizz", fizzBuzz.start(3));
        });
        it('Broj dijeljiv sa 5 daje "Buzz"', () => {
            assert.equal("Buzz", fizzBuzz.start(5));
        });
        it('Broj dijeljiv sa 3 i sa 5 daje "fizzBuzz"', () => {
            assert.equal("FizzBuzz", fizzBuzz.start(15));
        })
        
    })
})

//R-G-R