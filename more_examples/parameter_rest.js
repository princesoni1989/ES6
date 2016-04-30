/**
 * Created by priya on 28/4/16.
 */
function f (x, y, ...a) {

  console.log("helo")
  console.log("x:",x,"y:",y,"...a",a)        // x: 1 y: 2 ...a [ 'hello', true, 7 ]
  return (x + y) * a.length;
}
console.log(f(1, 2, "hello", true, 7)==9);  //true


var str = "foo";
var chars = [ ...str ] // [ "f", "o", "o" ]
console.log(chars);
var char=[str];
console.log(char);  //["foo"]
