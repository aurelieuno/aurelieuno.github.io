// function palindrome(str) {
//   var string=String(str).replace(/\s/g, '').replace(/,/g, '').replace(".", '').replace(/_/g, '').replace(/-/g, '').replace(/:/g, '').toLowerCase();
//   var fc= string.slice(0,1);
//   var lc= string.slice(-1);
//   var mc=string.slice(1,-1);
   
//   paplin(string);
//   function paplin(str) {
//       if(str.length < 2 ) {return true;}
//       if(fc(str) !==lc(str)){return false;}
//     return paplin(mc(str));

//   }
// }
function palindrome(str) {
  var string=String(str).replace(/\s/g, '').replace(/,/g, '').replace(".", '').replace(/_/g, '').replace(/-/g, '').replace(/:/g, '').toLowerCase();
  var array=string.split("");
  return paplin(array);
}  

function paplin(array) {
   if(array.length < 2 ) {return true;}
   if(array[0]!==array[array.length-1]) {return false;}
   else { 
     var q=array.slice(1,array.length-1);
      return paplin(q);
   }
}

console.log(palindrome("almossomla"));


