/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
function max(num1, num2, num3) { 
let maxNum;
if (num1 >=num2) {
  maxNum = num1;}
else {
  maxNum = num2;}
if (maxNum < num3) {
  maxNum = num3;
}
return maxNum;
}

function addUnknown(num1, num2,num3,num4, num5) {
 let sumNum = num1 + num2;
 if (num3 != null){
   sumNum += num3;
}
if (num4 != null){
  sumNum += num4;
}
if (num5 != null){
  sumNum += num5;
}
    return sumNum;
}

function evenOrOdd(num) {
  let oddEven;
  if(num % 2 === 0){
    oddEven = "even";
  }
  else{
    oddEven = "odd";
  }
  return oddEven;
}

function operator(num1, num2, num3) {
let plusMinus;
if(num3 === num1 + num2){
  plusMinus = "plus";
}
else if (num3 === num1 - num2){
  plusMinus = "minus";

}
else if (num3 === num1 * num2){
  plusMinus = "multiply";

}
else if (num3 === num1 / num2){
  plusMinus = "divide";

}
else {
  plusMinus = null;
}
return plusMinus;
}

module.exports = {
  max, addUnknown, evenOrOdd, operator,
};
