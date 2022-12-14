/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {
  let finalString;
  finalString = str.includes(letter);
  return (finalString);
}

function isPalindrome(str) {
  //use array loop  compare elements
  const strLength = str.length;
  let reverseString = '';

  for (let index = strLength - 1; index >= 0; index-- ){
    reverseString += str[index];
  }
  return(str === reverseString);

}

function cap(str, letter) {
let result = str.indexOf(letter);
if (result < 0){
  return("sorry not found");
}
else if (result === str.length - 1){
  return("That letter is the field of the string");
}
else{
  return(str[result + 1].toUpperCase());
}

}

function firstCharacter(str1, str2) {
  const str1First = str1[0];
  const str2First = str2[0];
  return (str1First.toUpperCase() === str2First.toUpperCase());

}

module.exports = {
  cap, firstCharacter, doesInclude, isPalindrome,
};
