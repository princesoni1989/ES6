/**
 * Created by princesoni on 1/30/16.
 */

var Person = class  {
    constructor(name) {
        this.name = name;
    }

    getName() {
        console.log("name of the person " , this.name);
    }
}
var person  = new Person('prince soni');
person.getName();

