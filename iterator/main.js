/**
 * Created by princesoni on 1/27/16.
 */
'use strict'
let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
    console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
    console.log(i); // logs "3", "5", "7", "hello"
}
