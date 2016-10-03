/*Starting with ECMAScript 2015, the object initializer syntax also supports 
computed property names. That allows you to put an expression in brackets [], 
that will be computed as the property name. */
 // Computed property names (ES6)
var i = 0;
var a = {
  ["foo" + ++i]: i,
  ["foo" + ++i]: i,
  ["foo" + ++i]: i
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

var param = 'size';
var config = {
  [param]: 12,
  ["mobile" + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};

console.log(config); // { size: 12, mobileSize: 4 }
//////////////FUNCTIONS///////////////////////////
//Function declaration
function multiply(x, y) {
   return x * y;
}
//Function Expression-name can be omitted to create anonymous function
var multiply = function(x, y) {
   return x * y;
};

var multiply = function func_name(x, y) {
   return x * y;
};
//////////////////////////////////////////////////////
function isBigEnough(element, index, array) {
   return element >= 10;
} //Boolean
console.log(isBigEnough(24));
///////////////////OBJECTS///////////////////////////
var obj = { property1 : 'value1',   
            property2 : 'value2',            
            property3 : 'value3' };
            
console.log(Object.keys(obj)); //[ 'property1', 'property2', 'property3' ]
console.log(obj.hasOwnProperty('property1'));//true
console.log(Object.getOwnPropertyNames(obj)); //[ 'property1', 'property2', 'property3' ]

////////////////////METHODS ARRAYS/////////////////////////
Add to the end of an Array
var newLength = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]

Remove from the end of an Array
var last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"];

Remove from the front of an Array
var first = fruits.shift(); // remove Apple from the front
// ["Banana"];

Add to the front of an Array
var newLength = fruits.unshift("Strawberry") // add to the front
// ["Strawberry", "Banana"];

Find the index of an item in the Array
fruits.push("Mango");
// ["Strawberry", "Banana", "Mango"]
var pos = fruits.indexOf("Banana");
// 1

// ["Strawberry", "Banana", "Mango"]
Remove an item by Index Position
var removedItem = fruits.splice(1, 1); // this is how to remove an item
//removedItem = ["Banana"]
// fruits = ["Strawberry", "Mango"]

var fruits2=fruits.slice(1,2) //Banana
var fruits3=fruits.slice(0,1) //'Apple'
var fruits4=fruits.slice(1) //[ 'Banana', 'Orange' ]
end	Optional. An integer that specifies where to end the selection. 
If omitted, all elements from the start position and to the end of the array will be selected.
var fruits5=fruits.slice(2,3) //[ 'Orange' ]

///
var fruits = ["Apple", "Banana", "Orange"];
var fruits2=fruits.slice(1,2) //Banana
var fruits3=fruits.splice(1,1)//Banana
///
var fruits = [];
fruits.push('banana', 'apple', 'peach');
console.log(fruits.length); // 3
fruits[5] = 'mango';
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits));  // ['0', '1', '2', '5']
console.log(fruits.length); // 6

///////////////////////////
Concatenating three arrays

The following code concatenates three arrays:

var num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];

var nums = num1.concat(num2, num3);

console.log(nums); // Result: [1, 2, 3, 4, 5, 6, 7, 8, 9]

//////////////METHODS///////////////////////
/////////////1/EVERY///////////////////////
The EVERY method executes the provided callback function once for each element
present in the array until it finds one where callback returns a falsy value 
(a value that becomes false when converted to a Boolean). If such an element 
is found, the every method immediately returns false. Otherwise, if callback 
returned a true value for all elements, every will return true

function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
////////////2/FILTER////////////////////////
FILTER() calls a provided callback function once for 
each element in an array, and constructs a new array of 
all the values for which callback returns a value that 
coerces to true.

function isBigEnough(value) {
  return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

var invalidEntries = 0;

function filterByID(obj) {
  if (obj.id !== undefined && typeof(obj.id) === 'number' && !isNaN(obj.id)) {
    return true;
  } else {
    invalidEntries++;
    return false;
  }
}

var arrByID = arr.filter(filterByID);

console.log('Filtered Array\n', arrByID); 
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries); 
// Number of Invalid Entries = 4

////////3/FIND////////////////////////////
The FIND method executes the callback function once for each element present in the array 
until it finds one where callback returns a true value. If such an element is found, find immediately 
returns the value of that element. 
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function findCherries(fruit) { 
    return fruit.name === 'cherries';
}
//>>>like checking if object has the property value cherrie
console.log(inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }

Find a prime number in an array
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}
console.log(findIndex(inventory,findCherries));//2
console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
console.log([4, 5, 8, 12].findIndex(isPrime));//1
//////4/FINDINDEX//////////////////////////
FINDINDEX
Find the index of a prime number in an array

function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2

////////////5/EACH/////////////////////////////
FOREACH forEach() executes the provided callback once for each element present in the 
array in ascending order. It is not invoked for index properties that have been 
deleted or are uninitialized (i.e. on sparse arrays).

function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

// Notice that index 2 is skipped since there is no item at
// that position in the array.
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9

///////////////////
The arguments.length property contains the number of arguments passed to the function.
////BOOLEAN/////
function isBigEnough(element, index, array) {
   return element >= 10;
} //Boolean
console.log(isBigEnough(24));//TRUE
///////////////////////
Prime numbers : 2,3,5,7,11,13,17,19
//////////////////////
/**
* return array
~ boolean
>array
>>object



*_.MAP (collection, transform) 
_.map([1, 2, 3], function(num){ return num * 3; });
=> [3, 6, 9]
> return an array

MAP returns an array with transform and FILTER returns an array with test

*_.PLUCK (collection, property)
the most common use-case for map, extracting a list of property values.
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

_.pluck(stooges, 'name');
=> ["moe", "larry", "curly"]
use map

_.indexOf (array, value)
returns the first index; otherwise returns -1.
_.indexOf([1, 2, 3], 2);
=> 1

_.findIndex (array, test) //findKey (object, test) (first one)
returns the first index where the truth test passes; otherwise returns -1.
_.findIndex([4, 6, 7, 12], isPrime);
=> 2

_.FIND (collection, test) (first one)
Looks through each value in the list, returning the first one that passes a truth test,
or undefined if no value
_.find([4, 6, 7, 12, 13], isPrime);
=> 7
use findIndex

~_.CONTAINS (collection, value)
Returns true if the value is present in the list. Uses indexOf internally, if list is an Array
_.contains([1, 2, 3], 3);
=> true
use indexOf if array

~_.EVERY (collection, test)
Returns true if all of the values in the list pass the predicate truth test.
_.every([2, 4, 5], function(num) { return num % 2 == 0; });
=> false
use var holder = false with each

~_.SOME (collection, test)
Returns true if any of the values in the list pass the predicate truth test
_.some([2, 4, 5], function(num) { return num % 2 == 0; });
=> true
use var holder = true with each

*_.FILTER (collection, test)
Looks through each value in the list, returning an array of all the values that pass a truth test
_.filter([4, 6, 7, 12, 13], isPrime);
=> [7, 13]
use var filtered =[] with each
like 'find' but all the way thru

*_.REJECT [4, 6, 12]
*_.PARTITION [[7, 13], [4, 6, 12]]

_.WHERE (collection, properties)
Looks through each value in the list, returning an array of all the values that contain all of the key-value pairs
listed in properties.
_.where(listOfPlays, {author: "Shakespeare", year: 1611});
=> [{title: "Cymbeline", author: "Shakespeare", year: 1611},
    {title: "The Tempest", author: "Shakespeare", year: 1611}]
use filter and every


>>_.PICK(object, *keys) 
Return a copy of the object, filtered to only have values for the whitelisted keys (or array of valid keys). 
Alternatively accepts a predicate indicating which keys to pick.
_.pick({name: 'moe', age: 50, userid: 'moe1'}, 'name', 'age');
=> {name: 'moe', age: 50}
_.pick({name: 'moe', age: 50, userid: 'moe1'}, function(value, key, object) {
  return _.isNumber(value);
});
=> {age: 50} 
use var picked ={};


>_.UNIQ (array)
Produces a duplicate-free version of the array
_.uniq([1, 2, 1, 4, 1, 3]);
=> [1, 2, 4, 3]
use var holder and indexOf
or reduce
array only

>>_.EXTEND (destination, *arguments)
Shallowly copy all of the properties in the source objects over to the destination object, 
and return the destination object. Any nested objects or arrays will be copied by reference, not duplicated. 
It's in-order, so the last source will override properties of the same name in previous arguments.
_.extend({name: 'moe'}, {age: 50});
=> {name: 'moe', age: 50}
use var arg =arguments[i]


_.INVOKE(collection, methodName, *arguments) 
Calls the method named by methodName on each value in the list. 
Any extra arguments passed to invoke will be forwarded on to the method invocation.

_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
=> [[1, 5, 7], [1, 2, 3]]
use map

_.REDUCE(list, iteratee, [memo], [context]) 
boils down a list of values into a single value.
Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. 
The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, 
and finally a reference to the entire list.
If no memo is passed to the initial invocation of reduce, 
the iteratee is not invoked on the first element of the list. 
The first element is instead passed as the memo in the invocation of the iteratee on the next element in the list.

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
=> 6


max
min
shuffle
sample


    
//////////////
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function findCherries(fruit) { 
    return fruit.name === 'cherries';
}
inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }
inventory.where( {name: 'cherries'})); // { name: 'cherries', quantity: 5 }
/////////////////










**/