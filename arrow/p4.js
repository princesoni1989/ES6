/**
 * Created by princesoni on 1/30/16.
 */

'use strict';



function user() {
    this.name = 'prince';
    setTimeout(function () {
        console.log("### executed ###", this.name);
    }, 3000)
}
var person = new user();

console.log('output ... ',person);


/*function user() {
  this.name = 'prince';
  setTimeout(() => {
    console.log("### executed ###", this.name);
  }, 3000)
}
var person = new user();

console.log('output ... ',person);*/
