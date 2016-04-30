/**
 * Created by princesoni on 1/30/16.
 */
var obj = {
    name: 'prince soni',
    city: 'noida'
}

var name = obj.name;
console.log(name);

var {name} = obj;
console.log(name);

var obj = {
    name: 'prince soni',
    city: 'noida',
    address : [1,2,3],
    location: {

    }
}

//check for undefined value
var {location: {country}} =obj;
console.log(country);


