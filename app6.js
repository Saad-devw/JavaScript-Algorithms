function isPalindrome(word){

  let forwardWord = word.toLowerCase().replace(/[\W_]/g,'');

  let reverseWord = forwardWord.split('').reverse().join('');

  if (forwardWord === reverseWord)
  {
    return true;
  }else{
    return false;
  }
  return 0;
}

console.log(isPalindrome("*/.my age ega ym"));
console.log(isPalindrome("*/._--00)'(00/++"));
console.log(isPalindrome("*this is false*"));