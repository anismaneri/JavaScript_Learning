var myResult=0/0;
console.log(myResult);
console.log(typeof myResult);

var myName="TEST";
var myAge="31";
console.log(typeof myResult);
console.log(typeof myAge);

var myAgeNumber= +myAge;
console.log( myAgeNumber, typeof  myAgeNumber);

var myNameString = +myName
console.log( myNameString, typeof  myNameString );
// or same but separate
var myResult=0/0;
console.log(myResult);
console.log(typeof myResult);

var myName= "31";
console.log(myAge, typeof myAge);
var myAgeNumber= +myAge;
console.log( myAgeNumber, typeof  myAgeNumber);

var myName ="TEST";
console.log(typeof myName);
var myNameString = +myName
console.log( myNameString, typeof  myNameString );

var operand1 = 100 ;
var operand2 = 200;
console.log(operand1 + operand2);

var operand1 = "100";
var operand2 = "200";
console.log(operand1+operand2);

var operand1 =+ "100";
var operand2 =+ "200";
console.log(operand1+operand2);

console.log("=====Implicit conversion======");
console.log("4"-true); // 4-1

var operand2 = 200;
console.log(operand2, typeof operand2);
var operand2Str = operand2.toString();
console.log(operand2Str, typeof operand2Str);