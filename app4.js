/*** first way ****/
function factorial (num){
  let result = 1 ;
  if(num === 0 || num === 1)
  {
    return result;
  }
  else{
    for ( i = num ; i >= 1 ; i--)
    {
      result = result * i ;
    }
    return result;
  }
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));

/*** second way ***/
function fact (n){
  if( n === 0 || n === 1)
  {
    return 1;
  }
  else {
    return n * fact( n - 1 );
  }
}

console.log(fact(5));
console.log(fact(4));
console.log(fact(0));
console.log(fact(1));