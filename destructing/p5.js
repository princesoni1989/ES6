/**
 * Created by princesoni on 1/30/16.
 */
'use strict'

function calAverage({hindi: h, english:e, science:s, minmark = 9, callback:cb}) {
    if (minmark < 1) {
        console.log("your are disqualified in exam..")
    }
    var avg = (h + e + s) / 3;
    if (avg > 1) {
        console.log("Student is passed in the examination");
    }
    if (cb)
        cb(avg)
}

calAverage(1, 2, 3, 1, function (res) {
    console.log("Result occured")
});
calAverage({
    hindi: 1, english: 2, science: 3, callback: function () {
        console.log("pp")
    }
});
