function sumFibs(num) {
  var i=0;
  var arr=[1,1];
  while( i<num+1){
    i=arr[arr.length-1]+arr[arr.length-2];
    if(i<num+1) {arr.push(i);}
  }
  var arr1= arr.filter(function(x){return x%2 !== 0});
  return arr1.reduce(function(prev, curr){ return prev + curr});
}

//console.log(sumFibs(21));
////////////////////////////////////////////////////////////////////////

function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}



