function upperCaseFirstChar(str){

  let myString = str.split(' ');

  myString = myString.map(function (word) {

    let firstChar = word.charAt(0).toUpperCase();
    
    word = firstChar.concat(word.slice(1,word.length));
    return word;
  });

  myString = myString.join(' ');

  return myString;
}

console.log(upperCaseFirstChar("hi my name is saad")); //Hi My Name Is Saad