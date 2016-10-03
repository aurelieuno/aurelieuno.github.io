function smallestCommons(arr) {
  if(arr[0]===1) {arr[0]=2;}
  if(arr[1]===1) {arr[1]=2;}
   var arr1=[];
  if(arr[0]<arr[1]){
    for (var i=arr[0];i<arr[1]+1;i++){
      arr1.push(i);
    } 
  } else {
    for (var j=arr[0];j>arr[1]-1;j--){
      arr1.push(j);    
  }
  }
  var k=arr1[arr1.length-1];
  var truth=false;
  var truth2=false;
  while(truth2===false){
 
  for(var x=0;x<arr1.length;x++){
    if(k%arr1[x]!==0) {truth=true;}
  }
if(truth===false){
  truth2=true;
return k;
    }
      else {
        k=k+1;
        truth=false;
      }
}
}

//////////////////////////////////////////////////////////////
function smallestCommons1(arr) {
  // Sort array from greater to lowest
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
  arr.sort(function(a, b) {
    return b - a;
  });

  // Create new array and add all values from greater to smaller from the
  // original array.
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  // Variables needed declared outside the loops.
  var quot = 0;
  var loop = 1;
  var n;

  // Run code while n is not the same as the array length.
  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);

  return quot;
}

console.log(smallestCommons1([1,7]) );
///////////////////////
function smallestCommons(arr) {
  for (i = Math.max(...arr); i >= Math.min(...arr); i--) { arr.push(i); }

  return arr.slice(2).reduce(function(x, y) {
    var a = x, b = y, t = 0;
    while (a % b) { a = a % b; t = a; a = b; b = t; }
    return x / b * y;
  });
}
////////////////////////////////////////
function smallestCommons(arr) {
  for (i = Math.max(...arr); i >= Math.min(...arr); i--) { arr.push(i); }

  var lcm = arr[2], a = 0, b = 0, t = 0;

  for (i = 3; i < arr.length; i++) {
    a = lcm, b = arr[i];
    while (a % b) { a = a % b; t = a; a = b; b = t; }
    lcm = lcm / b * arr[i];
  }

  return lcm;
}