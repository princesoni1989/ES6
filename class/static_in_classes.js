/**
 * Created by priya on 28/4/16.
 */
class Shape {
  static a(){
    console.log("Static method");
  }
}
Shape.a();  //Static method

var obj=new Shape();
// obj.a();  //error: obj.a a is not defined
Shape.a();  //hello
