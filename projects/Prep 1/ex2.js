//RECOGNIZE FILTER AND FOREACH

function isBigEnough(element, index, array) {
   return element >= 10;
} //Boolean
console.log(isBigEnough(24));

var filtered1 = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered1);
//Arrow functions

var filtered2 = [12, 5, 8, 130, 44].filter((value) => value >= 10);
console.log(filtered2);

function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

// Notice that index 2 is skipped since there is no item at
// that position in the array.
console.log([2, 5, , 9].forEach(logArrayElements));