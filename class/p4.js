/**
 * Created by princesoni on 1/30/16.
 */

class Person{
    constructor(name) {
        this.name = name;
    }

    getName() {
        console.log("name of the person " , this.name);
    }
}

class child extends Person{
  constructor(name){
   super(name)
  }
}


var person  = new child('prince soni');
person.getName();

