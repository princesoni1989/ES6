
var a=function(){
  return 1;
};
var obj={
  [a()+1]:20
}
console.log(obj[2]);  //20
//console.log(obj.2);   error unexpected token

//Using Symbol data type
var firstName = Symbol("first name");
var person = {
  age:1
};
person[firstName] = "Nicholas";
console.log("firstName" in person);       // false
console.log("first name" in person);      //false
console.log(person[firstName]);           // "Nicholas"
console.log(firstName);                   //Symbol(first name)
console.log(typeof(firstName))            //Symbol
console.log(person)                       //{age:1}

