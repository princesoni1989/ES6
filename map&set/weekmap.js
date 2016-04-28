/**
 * Created by princesoni on 1/27/16.
 */
//https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
var person = new WeakMap();
var obj = {name: 'prince'};
person.set(obj, 'test')
console.log(person.get(obj))