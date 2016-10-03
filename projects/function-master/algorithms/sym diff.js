function symmetric_difference(a1, a2) {
  var result = [];
  for (var i = 0; i < a1.length; i++) {
    if (a2.indexOf(a1[i]) === -1) {
      result.push(a1[i]);
    }
  }
  for (i = 0; i < a2.length; i++) {
    if (a1.indexOf(a2[i]) === -1) {
      result.push(a2[i]);
    }
  }
  return result;
}
//////////////////////////////////////////////////////////////
function diff(arr1, arr2) {  
  var newArr = [];

function getDiff(firstArr, secondArr){  
 for(var elem in secondArr){
    if(firstArr.indexOf(secondArr[elem]) === -1){
      newArr.push(secondArr[elem]);
    }
  } 
}

  getDiff(arr1, arr2);
  getDiff(arr2, arr1);

  return newArr;
}
////////////////////////////////////////////////////////////////////////
function diff2(arr1, arr2) {  
  return arr1.concat(arr2).filter(function(item) { 
    return !(arr1.indexOf(item) >= 0 && arr2.indexOf(item) >= 0);
  });
}
///////////////////////////////////////////////////////////////////////////////

var a1 = ['anne', 'ben' ,'deric' ,'emily'   ];
var a2 = [ 'emily'  ,  'ben', 'carole'];
//console.log(symmetric_difference(a1, a2));
console.log(diff2(a1, a2));