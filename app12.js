function findMissing(numbers){
  let sortedNumbers = numbers.sort((v1,v2) => {
    return v1 - v2;
  });

  let missing = [];
  for( let i = 0; i < sortedNumbers.length; i++){
    
    if( i !== sortedNumbers[i])
    {
      return i;
    }
    
  }
  
}
console.log(findMissing([0,1,2,3,5,6,7,8,9])); //4
console.log(findMissing([9,5,4,1,2,3,8,6,0])); //7
console.log(findMissing([0,1,4,9,2,8,3,6,7])); //5