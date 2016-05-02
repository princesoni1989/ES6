/**
 * Created by priya on 28/4/16.
 */

  //example 1
let a=10;
var b=20
{
  let c=30;
  var d=40;
  console.log(a,b,c,d);          //10 20 30 40
  a=50;
  b=60;
  console.log(a,b,c,d);           //50 60 30 40
}
console.log(a,b,d);               // 50 60 40 after changed
//console.log(a,b,c,d);            error : c is not defined


//example 2
var x1=10;
var x1=20;                         //ok
let b1=10;
//let b1=20;                       error duplicate declaration
b1=30; //ok



//example 3
let callbacks = [];
for (let i = 0; i <= 2; i++) {
  callbacks[i] = function () {
    return i * 2;
  }
}
console.log(callbacks[0]() === 0);               //true
console.log(callbacks[1]() === 2);               //true


//if defined as var in loop
/*let callbacks = [];
for (var i = 0; i <= 2; i++) {
  callbacks[i] = function () {
    return i * 2;
  }
}
console.log(callbacks[0]() === 0);                  false
console.log(callbacks[1]() === 2);                  false
*/
