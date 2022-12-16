/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function factorial(num) {
  let Total = 1;
  for(let index = num; index > 0 ;index--){
      Total = Total * index;
  }
  return Total;
  
}

function stringReverse(str) {
  const strLength = str.length;
  let reverseString = '';

  for (let index = strLength - 1; index >= 0; index-- ){
    reverseString += str[index];
  }
  return(reverseString);

}

// do not use built in slice method.
function slicer(originalString, startIdx, endIdx) {
  if (startIdx === undefined && endIdx === undefined ){
    return originalString;
 }
 else if (endIdx === undefined){
    return(originalString.substr(startIdx));
 }
 else if (startIdx != undefined && endIdx !=undefined ){
   return(originalString.substring(startIdx,endIdx));  
 }

}

function addTheEvens(num) {
  let total = 0;
  for(let index = num; index >=0;index --){
    if(index % 2 === 0){
      total += index;
    }
  }
  return total;
}

module.exports = {
  factorial, stringReverse, slicer, addTheEvens,
};
