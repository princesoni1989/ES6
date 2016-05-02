
'use strict'

const a1=10;
// const a=20;            // error duplicate declaration
{
  const a1=20;
  console.log(a,"In block"); //20
}
console.log(a,"In outer block") //10


//const with objects
const obj={
  name:"priya"
}
/*const obj={       //duplicate declaration obj
 name:"priya",
 age:24
 }*/
obj.name='alpha'    //allow to change the values of object
const obj1={
  name:"priya"
}
obj.age=24; //work fine
//obj=obj1;   // error obj is read-only only
console.log(obj); //name: 'alpha', age:24;


//const with arrays
const arr=[1,2,3];
arr[1]=12;
arr[3]=4;
console.log("array",arr);
//arr=[12,3];  //error  arr is read-only property
console.log("array changed", arr);


//const with functions
const aa=function(){
  let def='klm';
  console.log(def);
}
aa();
/*const aa=function(){  //duplicate declaration of a function

 }*/

//const with classes
class alpha1{}
const obj2=new alpha1();
var obj3=new alpha1();
//obj2=obj3;// error


//use constants in classes
const constant1 = 33, constant2 = 2;
class Example {
  static get constant1() {
    return constant1;
  }
  static get constant2() {
    return constant2;
  }
}

const one = Example.constant1;
const one1 = Example.constant2;
console.log(one);  //33
console.log(one1); //2
