/**
 * Created by priya on 28/4/16.
 */
//example 1
var x=10;
var y=20;
var obj = { x, y }
console.log(obj.x);  //10
console.log(obj.y);  //20

//example 2
function a(){
  return 1;
}
var obj2={
  foo: "bar",
  ['b'+a()]:"dynamic"
}
console.log(obj2.foo);   //bar
console.log(obj2.b1);  //dynamic

//swapping of two numbers
var list1 = [ 1, 2, 3 ];
var [ a1, , b ] = list1;
[ b, a1 ] = [ a1, b ];
console.log("a:",a1);    //3
console.log("b:",b);     //1
console.log(list1);      //[1,2,3]

//object matching shorthand notation
function getASTNode(){
  return {
    op:21,
    lhs:{op:22},
    rhs:23
  }
}
var { op,lhs, rhs } = getASTNode();
console.log(op,lhs.op, rhs);   //21,22,23

var obj=getASTNode();
console.log(obj.op,obj.lhs.op, obj.rhs); //21,22,23

//parameter context matching
function f ([ name, val ]) {
  console.log(name, val);
}
function g ({ name: n, val: v }) {
  console.log(n, v);
}
function h ({ name, val }) {
  console.log("in function")
  console.log(name, val);
}
f([ "In f", 42 ]);
g({ name: "In g", val: 7 });
h({ name: "In h", val: 42 })
//f({ name: "In h", val: 42 })    output: TypeError: Invalid attempt to destructure non-iterable instance
//h(["in j", 32]);                output: [undefined undefined] function is called but values are not assigned to the paramters;


// put array elements into variables
var list = [ 7, 42 ];
var [ a , b = 2, c = 3, d ] = list;
console.log(a === 7);  //true
console.log(b === 42);  //true
console.log(c === 3);  //true
console.log(d === undefined);  //true


var l=[7];
var [a,b=2,c]=l;
console.log(a, b, c); //7, 2, undefined


//Problem with destructurng of arrays..
let colors = [ "red", [ "green", "lightgreen" ], "blue" ];

let [ firstColor, [ secondColor ] , third] = colors;

console.log(firstColor);        // red
console.log([secondColor]);     //["green"]
console.log(secondColor);       //green
console.log(third);             //blue
