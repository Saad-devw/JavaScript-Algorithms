function firstDuplicate(numArr){
  let duplicateNumber = {};

  for( num of numArr)
  {
    if(duplicateNumber.hasOwnProperty(num))
    {
      return num;
    }
    duplicateNumber[num] = null;
  }
  return -1;
}
console.log(firstDuplicate( [1,2,3,2,3])); //2
console.log(firstDuplicate( [1,2,3,1,3])); //1