/* eslint-disable no-unused-vars */
function multiply(arr) {
  let newArr= arr.flat();
  let numSize = newArr.length;
  let finalNum = 1;
  for(let index = 0; index < numSize;index ++){
        finalNum = finalNum * newArr[index];
  }
  return finalNum;
  
}

function includesCopy(arr, searchValue) {
let boolResult = false;
let newArr= arr.flat();
for(let index = 0; index < newArr.length; index++){
  if (newArr[index] === searchValue){
    boolResult = true;
    break;
  }
}
return boolResult;
}

function inventory(arr) {
  let flatArr = arr.flat().flat();
  let finalArr =[];
    for(let index = 0; index < flatArr.length; index +=3){
       finalArr.push( "The " + flatArr[index + 1] + " "+flatArr[index] + " is " + flatArr[index +2] + " dollars.");
    }
    return finalArr;

}

function camelCase(str) {
  let splitString = str.split(' ');
  finalString = '';
  for(let index = 0; index < splitString.length; index++){
    if (index === 0){
       finalString += (splitString[index].toLowerCase());
    }
    else if (index === (splitString.length - 1) && splitString[index].includes('!')) {
        let len = splitString[index].length;
        finalString += splitString[index][0].toUpperCase()+ splitString[index].substring(1,len - 1).toLowerCase();          
    }
    else
    {
       finalString += splitString[index][0].toUpperCase() + splitString[index].substring(1).toLowerCase();
    }
  }
  return finalString;
}

function joiner(arr, str) {
  if (str === undefined){
    str = ',';
  }
  let finalString = '';
    for(let index = 0; index < arr.length; index++){
      if (index ===  arr.length -1 ){
         finalString += arr[index] ;
      }
      else {
       finalString += arr[index] + str;
      }
    }
    return finalString;
   
}

module.exports = {
  multiply, includesCopy, inventory, camelCase, joiner,
};
