//Boolean
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1; //return if element is superior to 1
}
//


function each (collection,action){
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

function map (collection, transform) {
    var mapped = [];
    each(collection, function(value, position, collection) {
        mapped.push(transform (value, position, collection)) ;
    });
    return mapped;
}

function filter (collection, test) {
   var filtered = [];
   each (collection, function (value, position, collection){
     if(test(value, position, collection)===true) { filtered.push(value); }
   });
   return filtered;
 };
 
function every (collection, test) {
    var holder = true;
     collection.forEach(function (value, position, collection){
     if(test(value, position, collection)===false) { holder = false; }
     });
     return holder;
}

/**indexOf return the first index matching the value,
 * not convenient to use each as loop does not break**/
function indexOf(array, target){
    if (Array.isArray(array) === true) {
        for (var i=0; i< array.length; i++)
            if (array[i] === target) {return i;}
        }
        return -1;
    }  
//Note : better not to use EACH as possibility to return i and stop the loop

function findIndex (array,test){
     if (Array.isArray(array)) {
        for (var i=0; i< array.length; i++){
            if (test(array[i],i,array)) {return i;}//test is a boolean function, defined array[i] as argument
        }}
        return -1;
}
/**
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };**/
  
function unique(array){
    return reduce(array,function(uniqueVals,value){//how come uniqueVals =[]?
        if(indexOf(uniqueVals,value)===-1) uniqueVals.push(value);
        return uniqueVals;
    },[]);
}

function reduce (list, iteratee, memo){
  var memoUndefined = arguments.length < 3; //var Boolean
  each(list, function(elem, index, list){
    if(memoUndefined) {
      memoUndefined = false;
      memo = elem;
    } else memo = iteratee(memo, elem, index, list);
  });
  return memo;
};
// console.log(unique([1,2,2,4,5,6,5,2]))
// console.log(reduce([1,2,3], function(prev, curr){ return prev + curr}));

// console.log(pick({name: 'moe', age: 50, userid: 'moe1'}, 'name', 'age'));
// console.log(pick2({name: 'moe', age: 50, userid: 'moe1'}, function(value, key, object) {
//  return typeof value == 'number'}));
// => {name: 'moe', age: 50}

function pick (object, property){
    var picked = {};
    for (var i = 1; i < arguments.length ; i++){
        var args = arguments[i];
        picked[args]=object[args];
    }
    return picked;
}

function pick2 (object,test){
    var picked = {};
    each(object, function(value,key,collection){
        if (test(value)) { picked[key] = object[key];}
    })
    return picked;
}
// _.where = function(obj, attrs) {
//     return _.filter(obj, _.matcher(attrs));
//   };
// //Returns a predicate for checking whether an object has a given set of key:value pairs.
//  _.matcher = _.matches = function(attrs) {
//     attrs = _.extendOwn({}, attrs);
//     return function(obj) {
//       return _.isMatch(obj, attrs);
//     };
//   };
  
// //Returns whether an object has a given set of key:value pairs._
//   _.isMatch = function(object, attrs) {
//     var keys = _.keys(attrs), length = keys.length;
//     if (object == null) return !length;
//     var obj = Object(object);
//     for (var i = 0; i < length; i++) {
//       var key = keys[i];
//       if (attrs[key] !== obj[key] || !(key in obj)) return false;
//     }
//     return true;
//   };
  
  
  
function where (collection,properties){
    var prop = Object.keys(properties); //[author,year]
    return filter (collection, function (object, position, collection){
       return every(prop,function(value,index,collection){
           return object[value]===properties[value];
       }) 
    })
}

function where2 (collection,properties){
    //var prop = Object.keys(properties); //[author,year]
    return filter (collection, function(value,index,collection){
        return isMatch(value,properties);})
    
}

function isMatch (object,properties){
     var prop = Object.keys(properties); //[author,year]
      return every(prop,function(value,index,collection){
           return object[value]===properties[value];
})}

//console.log(isMatch({title: "Cymbeline", author: "Shakespeare", year: 1611}, {author: "Shakespeare", year: 1611}));

var listOfPlays = [{title: "Cymbeline", author: "Shakespeare", year: 1611},
    {title: "The Tempest", author: "Shakespeare", year: 1611},
    {title: "The Tempest", author: "John", year: 1611}];
//console.log(where2(listOfPlays, {author: "Shakespeare", year: 1611}));
//console.log(where(listOfPlays, {author: "Shakespeare", year: 1611}));

//console.log(invoke([[5, 1, 7,7,5], [3, 2, 1,3,4,2,1]], unique));
// => [[1, 5, 7], [1, 2, 3]]

function invoke (collection, methodName){
    return map (collection, function (value, index,collection){
        return methodName(value);
    });
}

// console.log(Math.max(1,2,3));
// var abc = [1,2,3].join(",");
// console.log(Math.max([1,2,3]));
// console.log(abc);

// _.unique3=function(array){
//     return _.reduce(array,function(uniqueVals,value){
//         if(_.indexOf(uniqueVals,value)===-1) uniqueVals.push(value);
//         return uniqueVals;
//     },[]);
// }


function MaxArray (array){
    return reduce (array, function (memo, value, index, array){
        return Math.max(memo,value);
    },0)
}

//console.log(MaxArray([5,2,67,4]));
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
console.log(max(stooges, function(stooge){ return stooge.age; }));
//=> {name: 'curly', age: 60};


function max (array, iteratee){
        var lastComputed  = -Infinity;
        var result = -Infinity;
        var computed= -Infinity;
    if (arguments.length===1){return MaxArray(array);}
    else {
        each(array,function(value,index,array){
            computed = iteratee(value);
            if (computed > lastComputed){
                result = value;
                lastComputed= computed;
            }
        });
    }
    return result;
}

console.log(Math.max.apply(Math, [1,2,36]));

