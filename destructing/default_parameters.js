/**
 * Created by priya on 30/4/16.
 */
//default values in functions
function f (x, y=2, z = 3) {
  console.log(x,y,z);                 //1 2 3
  return x + y + z;
}
console.log(f(1) === 6)               //true
