/**
 * Created by priya on 27/4/16.
 */
class Rectangle {
  constructor (width, height) {
    this._width  = width;
    this._height = height;
  }
  set width (width) {
    this._width = width;
  }
  get width () {
    return this._width;
  }
  set height (height) {
    this._height = height;
  }
  get height () {
    return this._height;
  }
  get area () {
    return this._width * this._height;
  }
}
var r = new Rectangle(50, 20);
console.log("Area of rectangle",r.area);
