/**
 * Created by princesoni on 1/30/16.
 */

function* getData() {
    var a = yield a;
    console.log(a)
    var b = yield b;
    console.log(b)
    var c = yield c;
    console.log(c)
    var d = yield d;
    console.log(d)
}

var it = getData();
console.log(it.next());
