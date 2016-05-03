/**
 * Created by akash on 3/5/16.
 */




class Object{
  constructor(id){
    this.id=id;
  }
  func(){
    console.log('id ... ',this.id);
  }

  func(){
    console.log('id ... ',this.id);
  }
}

class Shape extends Object{
  constructor(id,x,y){
    super(id);
    this.x=x;
    this.y=y;
   // super(id); // error ::  this is not defined
  }
  func(id,x,y){
    super.func();
    console.log('x ..... ',this.x,' ... y ......',this.y);
    //super.func();// working fine, but order is disturbed
  }
}



class Rectangle extends Shape {
  constructor (id, x, y, width, height)
  {

    super(id, x, y);

    this.width = width;
    this.height = height;
  }
    func(id,x,y,width,height){
      super.func();
      console.log('width .... ',this.width,' .. height ......  ',this.height);
    }
  }


var obj=new Rectangle(1,2,3,4,5);
obj.func(4,5,6,7,8);

