/**
 * Created by princesoni on 1/30/16.
 */

'use strict';

/*class Person {
 constructor(name) {
 this.name = name;
 }

 getName() {
 console.log("name of the person " , this.name);
 }

 setName(name) {
 this.name = name;
 }
 }
 var person  = new Person('prince soni');
 console.log('person.getName() ..... ',person.getName());

 person.setName('akash yadav');
 console.log('person.getName() ..... ',person.getName());*/


class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}
var person  = new Person('prince soni');

console.log('person.getName() ..... ',person.getName());

person.setName('akash yadav');

console.log('person.getName() ..... ',person.getName());
