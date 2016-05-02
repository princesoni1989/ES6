/**
 * Created by princesoni on 1/27/16.
 */
//https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
var ws = new WeakSet();
var obj = {};
var foo = {};

//ws.add(window);
ws.add(obj);

//ws.has(window); // true
console.log(ws.has(obj));    // false, foo has not been added to the set

//ws.delete(window); // removes window from the set
//ws.has(window);    // false, window has been removed
