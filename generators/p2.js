/**
 * Created by princesoni on 1/30/16.
 */
/**
 * Created by princesoni on 1/29/16.
 */

function* run(resume){
    console.log("Generator started")
    var d1 = yield getData('/user1',resume);
    console.log("user 1", d1);
    var d2 = yield getData('/user2',resume);
    console.log("user 2");
    var d3 = yield getData('/user3',resume);
    console.log("user 3");
    var d4 = yield getData('/user4',resume);
    console.log("user 4");
}
// var it = fetchResponse();
// console.log(it.next())
// console.log(it.next())
function getData(url, callback){
    setTimeout(function(){
        callback(url);
    },3000)
}

function run(gen){
    var iterator, resume;

    resume = function(data){

        var data1 = iterator.next(data);
        //console.log(data)
    }
    iterator = gen(resume);
    iterator.next();
}
