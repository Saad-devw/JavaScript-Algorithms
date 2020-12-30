function sumDigits(str){
  let strDigits = str.match( /\d+/g ) || [];
  var sum = 0;

  strDigits.forEach((digit) => {
    sum += Number(digit);
  });
  return sum;
}

console.log(sumDigits("I was born in 1999, so i'm 21 y.o now")); //202
console.log(sumDigits("javascript was discovred on 1995")); //1995