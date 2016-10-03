function convert(str) {
  var arr1=["&","<",">",'"',"'"];
  var arr2=["&amp;","&lt;","&gt;","&quot;",	"&apos;"];
  var arr3=str.split("");
  for (var i=0;i<arr3.length;i++){
      var index=arr1.indexOf(arr3[i]);
    if(index>-1){
      arr3.splice(i,1,arr2[index]);
    }
  }
  // &colon;&r,"par;
  return arr3.join("");
}

console.log(convert('Stuff in "quotation marks"'));
/////////////////////////////////////////////////////////////////
function convert2(str) {
  // &colon;&rpar;
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g,'&apos');
}
console.log(convert2('Dolce & Gabbana'));