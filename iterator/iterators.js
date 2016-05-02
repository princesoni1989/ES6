/**
 * Created by priya on 29/4/16.
 */
let iterable = [3, 5, 7];
iterable.foo = "hello";

for (let i in iterable) {     //index of array
  console.log(i); // 0, 1, 2, "foo"
}

for (let i of iterable) {
  console.log(i); //  3, 5, 7     //elements of array
}




