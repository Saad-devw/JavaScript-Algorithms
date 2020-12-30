function isDigit(str){
  let digitArray = ["0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9"];

  return digitArray.includes(str);
}

console.log(isDigit("1")); //true
console.log(isDigit("8")); //true
console.log(isDigit("d")); //false