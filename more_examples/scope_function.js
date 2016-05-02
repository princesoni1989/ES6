/**
 * Created by priya on 28/4/16.
 */
{
  function alpha() {
    return 1;
  }

  console.log("aplha equal to 1", alpha() === 1) //true

  {
    function beta() {
      return 2;
    }

    console.log("aplha equal to 1", beta() === 2); //true
    console.log("aplha equal to 1", alpha() === 1);  //false 'refer to inner function alpha'
    console.log("aplha equal to 3", alpha() === 3); //true
    function alpha() {
      return 3;
    }

    console.log("aplha equal to 3", alpha() === 3);  //true


  }
  console.log("aplha equal to 1", alpha() === 1);  //true
  //console.log("aplha equal to 1",beta()===2); //error beta is not defined
}


