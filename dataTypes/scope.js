/**
 * Created by princesoni on 1/29/16.
 */
'use strict'
let x = 0;

console.log(x)

if(true){
  let y =100
}
//Eror y is not defined
//console.log(y)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


let callbacks = []
for (let i = 0; i <= 2; i++) {
  callbacks[i] = function () { return i * 2 }
}
console.log(callbacks[0]() === 0)
console.log(callbacks[1]() === 2)
console.log(callbacks[2]() === 4)



/*
 let callbacks = []
 for (var i = 0; i <= 2; i++) {
 callbacks[i] = function(i){  return i * 2 }(i)
 }
 console.log(callbacks[0] === 0)
 console.log(callbacks[1] === 2)
 console.log(callbacks[2] === 4)
*/


const ARRAY = [1,2,3,4,5];

const ARRAY2 = [5,6,7,8,9,0];



for (let i = 0; i < ARRAY.length; i++) {
  const x = ARRAY[i]
}

//console.log('x ... ',x);// error x is not defined

for (let i = 0; i < ARRAY2.length; i++) {
  const y = ARRAY2[i]
}

//console.log('y ... ',y); // error y is not defined


console.log('i ....',i);

var i =9;

console.log('i ....',i);



{
  {
    const constant1 = 33,
      constant2 = 2;
  }

class Example {

  static get constant1() {
    return constant1;
  }

  static get constant2() {
    return constant2;
  }
}

  /* const one = Example.constant1;//error

   console.log('..... one ....',one);*/

}

var list = [ 1, 2, 3 ];

var [ab, ,ba] = list;

[ ba, ab ] = [ ab, ba ];

console.log('a1 ..... ',ab);

console.log('b1 ..... ',ba);

//console.log('list new ..... ',[ a1, b1 ]);



{
  let abc =13;
}
var abc = 23;

