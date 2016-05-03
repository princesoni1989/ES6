/**
 * Created by priya on 1/5/16.
 */

//example 1
let i = [11,12,13];
i[3] = "value";
for (let iterate in i) {
  console.log(iterate);     // output: 0 1 2 3
}
for (let iterate of i) {
  console.log(iterate);     // output: 11 12 13 value
}

//example 2
let values = [1, 2, 3];
let iterator = values[Symbol.iterator]();   //using 'Symbol.iterator'
console.log(iterator.next());               // "{ value: 1, done: false }"
console.log(iterator.next());               // "{ value: 2, done: false }"
console.log(iterator.next());               // "{ value: 3, done: false }"
console.log(iterator.next());              //{value:undefined done:true}



