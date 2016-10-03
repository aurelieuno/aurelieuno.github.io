function translate(str) {
  
  var vowels = ["a", "e", "i", "o", "u", "y"];
  if(vowels.indexOf(str.charAt(0))>-1){
    return str.concat("way");
  } else { 
      var arr= str.substring(1).split("");
      arr.push(str.charAt(0));
      arr.push("ay");
      return arr.join("");
  }

}




function translate1(str) {
var vowels = ["a", "e", "i", "o", "u", "y"];
  if(vowels.indexOf(str.charAt(0))>-1){
    return str.concat("way");
  } else { 
    var arr=str.split("");
    if(vowels.indexOf(arr[0])===-1) {return arr.push(arr[0]);}              
    arr.push("ay");
    return arr.join("");     
  }

}

translate("aonsonant");

function translate2(str) {
var vowels = ["a", "e", "i", "o", "u", "y"];
  if(vowels.indexOf(str.charAt(0))>-1){
    return str.concat("way");
  } else { 
    var arr=str.split("");
    for(var i=0;i<arr.length;i++){
      if(vowels.indexOf(arr[0])===-1) {
        arr.push(arr[0]);
        arr.splice(0,1);
      } else { 
    arr.push("ay");
    return arr.join("");
    }
         
}
}
}

console.log(translate2("bcouitre"));