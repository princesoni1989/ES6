/**
 * Created by priya on 27/4/16.
 */
'use strict'

import example_default,{sum,pi} from "./demo_export.js";
 /*
 Also used as
 1 ) import {default as example_default,sum,pi} from "./demo_export.js";
  */
console.log(sum(pi,pi));   //6.283186
example_default();         //this is default module

