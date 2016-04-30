/**
 * Created by princesoni on 1/29/16.
 */
'use strict'
var welcomeText  = '';
var name = 'prince ';
var surname = 'soni';
var location  = 'noida';
var state = 'up';
var country = 'india';

welcomeText  = 'Welcome ' + name  + ' ' + surname + ' to ' + location + ' to \n' + state + 'to\n' + country;

console.log(welcomeText)


welcomeText = `Welcome ${name} ${surname} to ${location}
      to ${state}
to ${country}`;
console.log(welcomeText)


welcomeText = `Welcome ${name} ${surname} to ${location}
#### to ${state}
to ${country}`;
console.log(welcomeText)


welcomeText = `Welcome ${name} ${surname} to ${location}
                            to ${state}
                            to ${country}`;
console.log(welcomeText)
