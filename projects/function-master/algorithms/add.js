function add() {
  if (typeof(arguments[0])!=="number") {return undefined;}
else if (arguments.length>1) {
    var sum=0;
    for (var i=0;i<arguments.length;i++){
      if(typeof(arguments[i])!=="number"){
        return undefined;
      
    } else {sum +=arguments[i];}
    }
    return sum;
  } else {
    var x=arguments[0];
    return function (y){
       if (typeof(y) ==="number"){
      return x+y;
    } else {return undefined;}
    };
}
} 

console.log(add(5,2));
////////////////////////////////////////////////
function add() {
  // Function to check if a number is actually a number
  // and return undefined otherwise.
  var checkNum = function(num) {
    if (typeof num !== 'number') {
      return undefined;
    } else
      return num;
  };

  // Check if we have two parameters, check if they are numbers
  // handle the case where one is not
  // returns the addition.
  if (arguments.length > 1) {
    var a = checkNum(arguments[0]);
    var b = checkNum(arguments[1]);
    if (a === undefined || b === undefined) {
      return undefined;
    } else {
      return a + b;
    }
  } else {
    // If only one parameter was found, returns a new function that expects two
    // Store first argument before entering the new function scope
    var c = arguments[0];

    // Check the number again, must be outside the function to about returning an object
    // instead of undefined.
    if (checkNum(c)) {
      // Return function that expect a second argument.
      return function(arg2) {
        // Check for non-numbers
        if (c === undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          // if numbers then add them.
          return c + arg2;
        }
      };
    }
  }
}