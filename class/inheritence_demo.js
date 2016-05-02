/**
 * Created by priya on 27/4/16.
 */
class Shape{
  constructor(id,x,y){
    this.id=id;
    this.x=x;
    this.y=y;
  }
   func(id,x,y){
  console.log(this.id,this.x,this.y);
}
}



class Rectangle extends Shape {
  constructor (id, x, y, width, height) {
    super(id, x, y);
    this.width  = width;
    this.height = height;
  super.func();                //1 2 3
  }
}

var obj=new Rectangle(1,2,3,4,5);
obj.func(4,5,6);             //1 2 3
