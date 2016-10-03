function steamroller(arr) {

 var arr1=[];
  var  flatten = function(arg){
    if(!Array.isArray(arg)) { arr1.push(arg);
     } else{
       for(var key in arg){
         flatten(arg[key]);
     }  
    }
};
     arr.forEach(flatten);
  return arr1;
  }

 

console.log(steamroller([1, [2], [3, [[4]]]]));

function steamroller1(arr) {
  var flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}