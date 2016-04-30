/**
 * Created by princesoni on 1/27/16.
 */

//https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set
var person = new Set();

person.add('prince')
person.add('soni')
person.add({name: 123});
console.log(person)
console.log(person.has('prince'))