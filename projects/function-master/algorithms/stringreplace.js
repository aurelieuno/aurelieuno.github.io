function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match) {
    return '-' + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}

// console.log(styleHyphenFormat("This Is Spinal Tap"));
// console.log(styleHyphenFormat("thisIsSpinalTap"));
// console.log(styleHyphenFormat("The_Andy_Griffith_Show"));
// console.log(styleHyphenFormat("Teletubbies say Eh-oh"));

//var newString = propertyName.replace(/[A-Z]/g, '-' + '$&'.toLowerCase());  // won't work

function spinalCase(str) {
  var string1=str.replace(/ /g, '-').replace(/_/g, '-');
  if(string1.indexOf("-")>-1){return string1.toLowerCase();}
  else {
    function upperToHyphenLower(match) {
    return '-' + match.toLowerCase();
  }
  return string1.replace(/[A-Z]/g, upperToHyphenLower);
}
}
console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));