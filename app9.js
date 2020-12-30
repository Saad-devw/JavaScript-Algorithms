/************** 1st Way *******************/
function repeatFunc(word, nbr){
  let myWords = '';

  while(nbr > 0)
  {
    myWords += word;
    nbr--;
  }

  return myWords;
}
console.log(repeatFunc("xo",5)); //xoxoxoxoxo

/************** 2nd Way (ES6) ******************/
function repeatStr(word,num){
  return word.repeat(num);
}

console.log(repeatStr("Hi",4)); //HiHiHiHi