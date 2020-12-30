function longString(str){
  let myString = str.split(' ');
  let longLength = 0;

    for( let i = 0; i < myString.length; i++)
    {
        //------------------------> this way

        /*
        if (myString[i].length > longLength)
        {
          longLength = myString[i].length;
        }
        */

        //-------------------------> or this way
        longLength = myString[i].length > longLength ? myString[i].length : longLength ;
    }
  return longLength;
}
console.log(longString("hi my name")); //4
console.log(longString("this is the longestword")); //11
console.log(longString("hi my friend")); //6

/************** using Foreach *********************/

function longString2(str){
  let myString = str.split(' ');
  let longLength = 0;

  myString.forEach((word) => {
    longLength = word.length > longLength ? word.length : longLength ;
  });

  return longLength;
}
console.log(longString2("hi my name")); //4
console.log(longString2("this is the longestword")); //11
console.log(longString2("hi my friend")); //6

/*********** using sort() method ************/

function longString3(str){
  let myString = str.split(' ');
  let longLength = 0;

  myString = myString.sort((word1,word2) => {
    return word2.length - word1.length;
  });

  return myString[0].length;
}

console.log(longString3("hi dear, i'm from kwalalamborg")); //12
