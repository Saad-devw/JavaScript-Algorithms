function duplicateNumber(numArr){
  let sortedNumbers = numArr.sort( (nbr1, nbr2) => {
    return nbr1 - nbr2;
  });

  for(let i = 0; i < sortedNumbers.length ; i++){

    if( sortedNumbers[i] === sortedNumbers[i+1]){
      return sortedNumbers[i];
    }
  }
}

console.log(duplicateNumber([3,2,3,0])); //3
console.log(duplicateNumber([4,,7,4])); //4
console.log(duplicateNumber([1,9,3,,8,5,6,9])); //9