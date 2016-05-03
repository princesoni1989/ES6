/**
 * Created by akash on 28/4/16.
 */

'use strict'


const CONST1 = 'akash';
const PI = 3.14159;

console.log('CONST1 : ',CONST1,' PI : ',PI);

/*CONST1 = 'yadav';//error Assignment to constant variable.
 PI=3;//error Assignment to constant variable.

 console.log('CONST1 : ',CONST1,' PI : ',PI);*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


const VARIABLE= {a:'asd',b:13};

const VARIABLE2 = {c:'asdasd',b:1233};

VARIABLE.a = 'qaz';// no error

console.log(VARIABLE);//{ a: 'qaz', b: 13 }

VARIABLE.c = 'error';// no error

console.log(VARIABLE);//{ a: 'qaz', b: 13, c: 'error' }

//VARIABLE = {a:'asd',b:13, d : 234};//error Assignment to constant variable.

//console.log(VARIABLE);

//VARIABLE = VARIABLE2//error Assignment to constant variable.

//console.log(VARIABLE);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


const ARRAY = [1,2,3,4,5];

const ARRAY2 = [5,6,7,8,9,0];

ARRAY[0] = 11;// no error

console.log(ARRAY);//[ 11, 2, 3, 4, 5 ]

ARRAY[5] = 66;// no error

console.log(ARRAY);//[ 11, 2, 3, 4, 5, 66 ]

//ARRAY = [9,8,7,6,5,4];//error Assignment to constant variable.

//console.log(ARRAY);

//ARRAY = ARRAY2//error Assignment to constant variable.

//console.log(ARRAY);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

const FUN1 = function(){
  console.log('FUN1');
}
var FUN2 = function(){ // const FUN2 = function(){
  console.log('FUN2');
}

FUN1();

FUN2();

//FUN1 = FUN2 ;//error Assignment to constant variable.


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


const CLASS_A = class {

  fun3(){
    console.log("class a fun3 ...");
  }
  fun3(){
    console.log("class a fun3 ...");// override
  }

}

var obj = new CLASS_A();

obj.fun3();


class class_b extends CLASS_A{
  fun4(){
    console.log("call via fun4 .... ");
    super.fun3();
  }
}


/*const CLASS_A = class  // error Duplicate declaration "CLASS_A"
 {
 fun5()
 {
 console.log("call via fun5 .... ");
 }
 }

 var objA = new CLASS_A();
 objA.fun5();*/

var obj2 = new class_b();

obj2.fun4();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

for (let i = 0; i < ARRAY.length; i++) {
  const x = ARRAY[i]
}

//console.log('x ... ',x);// error x is not defined

