/**
 * Created by princesoni on 1/30/16.
 */
'use strict'

var arr = [1,2,3, [5,6], 5, 4];
var six = arr[3]
console.log(six);

var [one, two, three, six] = arr;
console.log(six)

var [, , , six] = arr;
console.log(six)

var [one, ...args] = arr;
console.log(args)
