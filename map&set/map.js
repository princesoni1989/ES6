/**
 * Created by princesoni on 1/27/16.
 */
//https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map

var person = new Map();
//set to map
person.set('name', 'prince');

//get from map
console.log(person.get('name'))

//size of map
console.log(person.size);

//entries
console.log(person.entries())

//delete all
//person.clear();
console.log(person.size);

//delete specific
person.delete('name')
console.log(person.entries())