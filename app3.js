function fizzBuzz(number){
  if(number % 3 === 0 && number % 5 !== 0)
  {
    return 'fizz';
  }else if(number % 5 === 0 && number % 3 !== 0)
  {
    return 'buzz';
  }else if(number % 3 === 0 && number % 5 === 0)
  {
    return 'fizzbuzz';
  }else{
    return 'none';
  }
}

var result = fizzBuzz(3);
console.log(result); //fizz

result = fizzBuzz(5);
console.log(result); //buzz

result = fizzBuzz(15);
console.log(result); //fizzbuzz

result = fizzBuzz(1);
console.log(result); //none