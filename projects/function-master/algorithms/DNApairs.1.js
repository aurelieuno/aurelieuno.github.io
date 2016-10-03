function drop(arr, func) {
  for(var i=0;i<arr.length;i++){
    if(func(arr[i])===true) {return arr.slice(i);
     } else { return arr.slice(i+1);}
  }
 
}

console.log(drop([1, 2, 3, 4], function(n) {return n > 5;}));