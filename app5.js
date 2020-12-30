/*******     first way     ************/

function reverseit(string){
  //first step is to separate every char from the other
  let newString = string.split('');

  //next we reverse the characters
  newString = newString.reverse();

  //finally, we join the together
  newString = newString.join('');

 return newString;
}

console.log(reverseit('abc')); //cba
console.log(reverseit('xyz')); //zyx

/******       second way     *********/

function reverseStr(str){
  //join all methods together
  let myString = str.split('').reverse().join('');

  return myString;
}

console.log( reverseStr("ABCD") ); //DCBA
console.log( reverseStr("EFGH") ); //DCBA


/*******     third way  using for loop   ********/

function reverseFunc(word){
  let reversedWord = '';
  for( let i = word.length - 1 ; i >= 0 ; i--)
  {
    reversedWord += word[i];
  }

  return reversedWord
}

console.log(reverseFunc("EFJHIG")); //GIHJFE
console.log(reverseFunc("SAAD")); //GIHJFE