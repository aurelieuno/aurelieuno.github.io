// This is the proper way to start a javascript library
(function() {
  
// This makes the arguments variable behave the way we want it to and a few
// other things. For more info: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// This allows us to use our "_" anywhere. In a web browser, properties of window
// are available everywhere without having to type "window."
/* global _ */
window._ = {};

/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/
//FUNCTION 1
/** _.identity()
* Arguments:
*   1) Anything
* Objectives:
*   1) Returns <anything> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity=function (value) {
    return value;
};
//FUNCTION 2
/** _.typeOf()
* Arguments:
*   1) Anything
* Objectives:
*   1) Return the type of <anything> as a string
*       Types are one of: 
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf=function(value) {
    if (Array.isArray(value) === true) {return "array";
} else if (value === null) {return "null";
} else {return typeof value;
}
};
    
//FUNCTION 3
/** _.first()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first(["a","b","c"], 1) -> "a"
*   _.first(["a","b","c"], 2) -> ["a", "b"]
*   _.first(["a", "b", "c"], "ponies") -> ["a","b","c"]
*/

_.first= function(array, n){
  n = n || 1;
  if (n < 1 || !Array.isArray(array))  return [];
  return n > 1 ? array.slice(0, n) : array[0];
 }
//FUNCTION 4
/** _.last()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Gotchas:
*   1) What if <nubmer> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last(["a","b","c"], 2) -> ["b","c"]
*   _.last(["a", "b", "c"], "ponies") -> ["a","b","c"]
*/

_.last= function(array, n){
   n = n || 1;
   if(n < 1 || !Array.isArray(array))  { return [] ;
   } return n > 1 ? array.slice(-n): array[array.length - 1];
}
 
//FUNCTION 5
/** _.each()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments: 
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)}); 
*      -> should log "a" "b" "c" to the console
*/

_.each = function (collection,action){
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

//FUNCTION 6
/** _.indexOf()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Gotchas:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf= function(array, target){
    if (Array.isArray(array) === true) {
        for (var i=0; i< array.length; i++)
            if (array[i] === target) {return i;}
        }
        return -1;
    }    
  
//FUNCTION 7
/** _.filter()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Gotchas:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

 _.filter = function (collection, test) {
   var filtered = [];
   _.each (collection, function (value, position, collection){
     if(test(value, position, collection)) { filtered.push(value); }
   });
   return filtered;
 };

//FUNCTION 8
/** _.reject()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(collection, test){
    return _.filter (collection, function (value,position,collection){
    return !test(value, position,collection);
    });
};

//FUNCTION 9
/** _.partition()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Gotchas:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function (array, test){
    return [_.filter (array, test),_.reject (array, test)]
}
//FUNCTION 10
/** _.unique()
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function (array){
    var noDups=[];
    for (var i=0; i<array.length;i++){
        if (_.indexOf(noDups,array[i])===-1) {noDups.push(array[i]);}
        }
        return noDups;
}

_.unique3=function(array){
    return _.reduce(array,function(uniqueVals,value){
        if(_.indexOf(uniqueVals,value)===-1) uniqueVals.push(value);
        return uniqueVals;
    },[]);
}


//FUNCTION 11
/** _.map()
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*
*/

_.map=function (collection, transform) {
    var mapped = [];
    _.each(collection, function(value, position, collection) {
        mapped.push(transform (value, position, collection)) ;
    });
    return mapped;
}


//FUNCTION 12
/** _.pluck()
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
 _.pluck=function(array,target){
     return _.map(array, function(value){
         return value[target];
     });
 }
 
 
//FUNCTION 13
/** _.contains()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Gotchas:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains= function (array,value){
    value = value || null;
    return _.indexOf(array,value) === -1 ? false  : true ;
}   

//FUNCTION 14
/** _.every()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/


_.every=function (collection, test){
    test = test || function (value) {return value};
  if ( Array.isArray(collection) ===true && (_.indexOf(collection,null)!==-1 || _.indexOf(collection,"")!==-1)){
      return false;
    }
    var holder = true;
      _.each(collection, function(value, position, collection) {
     if(!test(value, position, collection)) { holder = false; }
     });
     return holder;
}        


//FUNCTION 15
/** _.some()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some=function (collection, test){
  test = test || function (value) {return value};
  if ( Array.isArray(collection) ===true && (_.indexOf(collection,null)!==-1 || _.indexOf(collection,"")!==-1)){
      return false;
    }
    var holder = false;
      _.each(collection, function(value, position, collection) {
     if(test(value, position, collection)) { holder = true; }
     });
     return holder;
} 


//FUNCTION 16
/** _.reduce()
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed>
*   5) After the last iteration, return the return value of the final <function> call
* Gotchas:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(prev, curr){ return prev + curr}) -> 6
*/
_.reduce =function (list, iteratee, memo){
  var memoUndefined = arguments.length < 3; //Boolean
  _.each(list, function(elem, index, list){
    if(memoUndefined) {
      memoUndefined = false;
      memo = elem;
    } else memo = iteratee(memo, elem, index, list);
  });
  return memo;
};


//FUNCTION 17
/** _.extend()
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend =function (destination, sources) {
    for ( var i = 1; i < arguments.length; i++){
        var arg=arguments[i];
        _.each(arg,function(value,key,collection){
            destination[key]=arg[key];})}
        return destination;
}


/////FUNCTION 18

//PICK(object or function) >>> if (!_.isFunction(arguments[1))
/**
 For the function PICK arg could be a function or properties , need to know ->if (_.isFunction(oiteratee))
 Note: lodash is different than underscore on this
 **/
 
 
/**_.pick({name: 'moe', age: 50, userid: 'moe1'}, 'name', 'age');
=> {name: 'moe', age: 50}**/
function pick (object, property){
    var picked = {};
    for (var i = 1; i < arguments.length ; i++){
        var args = arguments[i];
        picked[args]=object[args];
    }
    return picked;
}
/**_.pick({name: 'moe', age: 50, userid: 'moe1'}, function(value, key, object) {
  return _.isNumber(value);
});
=> {age: 50} **/
function pick2 (object,test){
    var picked = {};
    each(object, function(value,key,collection){
        if (test(value)) { picked[key] = object[key];}
    })
    return picked;
}
/////FUNCTION 19
function findIndex (array,test){
     if (Array.isArray(array)) {
        for (var i=0; i< array.length; i++){
            if (test(array[i],i,array)) {return i;}//test is a boolean function, defined array[i] as argument
        }}
        return -1;
}
/////FUNCTION 20
/**FIND (collection, test)
Looks through each value in the list, returning the first one that passes a truth test,
or undefined if no value
_.find([4, 6, 7, 12, 13], isPrime);
=> 7**/
_.find = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  }
/////FUNCTION 21
/**WHERE (collection, properties)
Looks through each value in the list, returning an array of all the values that contain all of the key-value pairs
listed in properties.
_.where(listOfPlays, {author: "Shakespeare", year: 1611});
=> [{title: "Cymbeline", author: "Shakespeare", year: 1611},
    {title: "The Tempest", author: "Shakespeare", year: 1611}]**/

function where (collection,properties){
    var prop = Object.keys(properties); //[author,year]
    return _.filter (collection, function (object, position, collection){
       return _.every(prop,function(value,index,collection){
           return object[value]===properties[value];
       }) 
    })
}

////Underscore solution
_.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };
Returns a predicate for checking whether an object has a given set of key:value pairs.
 _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };
  
Returns whether an object has a given set of key:value pairs._
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };
  

/////FUNCTION 22
_.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };
/////FUNCTION 23
/**_.INVOKE(collection, methodName, *arguments) 
Calls the method named by methodName on each value in the list. 
Any extra arguments passed to invoke will be forwarded on to the method invocation.

_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
=> [[1, 5, 7], [1, 2, 3]]**/
function invoke (collection, methodName){
    return map (collection, function (value, index,collection){
        return methodName(value);
    });
}

/////FUNCTION 24
function MaxArray (array){
    return reduce (array, function (memo, value, index, array){
        return Math.max(memo,value);
    },0)
}
/////FUNCTION 25
/////FUNCTION 26
// This is the proper way to end a javascript library
}());
