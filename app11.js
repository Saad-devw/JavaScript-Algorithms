function isValid(str)
{
  let dateArray = str.split(':');
  if(Number(dateArray[0]) > 23)
  {
    return false;
  }
  else if(Number(dateArray[1]) > 59)
  {
    return false;
  }
  return true;
}
console.log(isValid("00:59")); //true
console.log(isValid("23:04")); //true
console.log(isValid("24:60")); //false