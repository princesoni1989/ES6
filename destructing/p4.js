/**
 * Created by princesoni on 1/30/16.
 */
var arr = [1,2,3]
var one = arr[0]
var two = arr[1]
console.log(one, two)

//swapping
var temp ;
temp = one;
one = two;
two = temp;
console.log(one, two)

//es6
var [one1, two1] = arr;
console.log(one1, two1);
[one1, two1] = [two1, one1];
console.log(one1, two1);
