/* first way to solve it */
function concatfunc(first,second){
  return "hi, my name is : ".concat(first," ",second);
}
console.log(concatfunc('saad','essadiki'));

/* 2nd way  */
function concatfunc2(first,second){
  const myname = "hi, my name is : "+ first + " " + second;
  return myname;
}
console.log(concatfunc2("john","doe"));

/* 3rd way : ES6 Literal templates */
function concatfunc3(first,second){
  return `my name is ${first} ${second}`;
}
console.log(concatfunc3("alex","mahone"));