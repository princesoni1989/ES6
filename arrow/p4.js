/**
 * Created by princesoni on 1/30/16.
 */
function user() {
    this.name = 'prince';
    setTimeout(function () {
        console.log("### executed ###", this.nmae);
    }, 3000)
}
var person = new user();
