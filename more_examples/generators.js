/**
 * Created by priya on 1/5/16.
 */
let createIterator = function *(items) {         //generator function
  for (let i = 0; i < items.length; i++) {
    yield items[i];
    console.log("After yield::",i);

  }
};

let iterator = createIterator([1, 2, 3]);
console.log(iterator.next());           // "{ value: 1, done: false }"
console.log(iterator.next());           // "{ value: 2, done: false }"
console.log(iterator.next());           // "{ value: 3, done: false }"
console.log(iterator.next());           // "{ value: undefined, done: true }"


/*
Output:
 { value: 1, done: false }
 After yield:: 0
 { value: 2, done: false }
 After yield:: 1
 { value: 3, done: false }
 After yield:: 2
 { value: undefined, done: true }
 */
