
function FizzBuzz() {
        let service = {
            start : start
        }
        return service;
        function start(n) {
        if(n % 3 === 0 &&  n % 5 === 0) return "FizzBuzz"
        if(n % 3 === 0) return "Fizz";
        if(n % 5 === 0) return "Buzz";
            

        }
    }
    module.exports = FizzBuzz();