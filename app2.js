function convertFunc(celsius){
  var result = celsius * 9/5 + 32;
  //math logic
  return result + 'F°';
}
console.log(convertFunc(30));
console.log(convertFunc(-27));
