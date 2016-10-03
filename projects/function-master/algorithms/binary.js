function binaryAgent(str) {
  var array=str.split(" ");
  var array2=[];

  array.forEach(array2.push(binary));
  each (array,function(value){
    //array2.push(binary(value));
  });
  function binary (string){
    var arr1=string.split("");
    var arr2=[];
    var sum=0;
    for(var k=arr1.length-1;k>-1;k--){
      arr2.push(Math.pow(2,k));
    }
    for(var i=0; i< arr1.length; i++) {
    sum += arr1[i]*arr2[i];
}
return sum;
  }  
    var array3=[];
    //array2.forEach(array3.push(String.fromCharCode));
    each(array2, function(value){
      array3.push(String.fromCharCode(value));
    });
      return array3.join("");
     
  }
  

console.log(String.fromCharCode(65,114,101,110,39,116,32,98,111,110,102,105,114,101,115,32,102,117,110,33,63));
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

function binary (string){
    var arr1=string.split("");
    var arr2=[];
    var sum=0;
    for(var k=arr1.length-1;k>-1;k--){
      arr2.push(Math.pow(2,k));
    }
    for(var i=0; i< arr1.length; i++) {
     sum += arr1[i]*arr2[i];
   
}
return sum;
  }  
  
//console.log(binary("01000001")); 

function each(collection,action){
    if(Array.isArray(collection)){
        for (var i =0 ; i < collection.length; i++) {
            action(collection[i],i,collection);
        }
    } else {
        for(var key in collection){
            action(collection[key],key,collection);
        }
    }
}
////////////////////////////////////////////////////////////
function binaryAgent(str) {
  var biString = str.split(' ');
  var uniString = [];
  
/*using the radix (or base) parameter in parseInt, we can convert the binary 
  number to a decimal number while simultaneously converting to a char*/

   for(var i=0;i < biString.length;i++){
   uniString.push(String.fromCharCode(parseInt(biString[i], 2))); 
  }
//we then simply join the string
  return uniString.join('');
}