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

// function first (array){
//     return array[0];
// }

// function first2 (object){
//     return object['one']
// }

// function map (collection, transform){
//     var mapped = [];
//     each(collection, function (value, index, collection){
//         mapped.push(transform(value));
//     });
//     return mapped;
// } 
// //console.log(map([1,2,3,4], function(e){return e * 2}));// -> [2,4,6,8]
// //console.log(map([{one: 1, two: 2, three: 3},{one: 4, five: 5, six: 6}], first2));
// //console.log(map([1,2,3,4], function(e){return e * 2}));// -> [2,4,6,8]
// //console.log(map([[1, 2], [3, 4]], first));
// console.log(map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; }));


// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// //console.log(stooges[0]['name']);
// //console.log(pluck(stooges, 'name'));
// //=> ["moe", "larry", "curly"]

// // function pluck (collection,propertyName){
// //     var array = map(collection, function(value, position,collection){
// //         each(value,function(value,key,collection){
// //             if(propertyName ==key) {return value;}
// //         });
        
// //     });
// //     return array;
// // }

// function pluck (array,target){
//      return map(array, function(value){
//          return value[target];
//      })};

// function pluck (collection,propertyName){
//     return map (collection, function (value, key, collection){
//          return value[propertyName];})};

// function indexOf(array, target){
//     if (Array.isArray(array) === true) {
//         for (var i=0; i< array.length; i++)
//             if (array[i] === target) {return i;}
//         }
//         return -1;
//     }     
// console.log(contains([1,"two", 3.14]));// -> true   
// function contains (array, value){
//     return indexOf(array,value) ===-1? false : true;
// }

// function some (collection, test){
//     var holder = false;
//       each(collection, function(value, position, collection) {
//      if(test(value, position, collection)) { holder = true; }
//      });
//      return holder;
// } 
// console.log(some([1,2,3], function(e){return e % 2 === 0}));


//console.log(reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0));
//console.log(reduce([1, 2, 3], function(memo, num){ return memo * num; }, 1));
//console.log(reduce([1, 2, 3], function(memo, num){ return memo * num; }, 0));
//=> 6


function reduce4 (array, combine, seed){
    if (typeof seed === 'number') {
         var start = seed ;
         for (var i = 0; i < array.length; i++){
        start = combine(start,array[i],i) }
        //return start;
    } else {
        var start = array[0];
        for (var i = 1; i < array.length; i++){
        start = combine(start,array[i],i)
    }
    //return start;
    }
    return start;
}

function reduce2 (list, iteratee, memo){
  var memoUndefined = arguments.length < 3;
  each(list, function(elem, index, list){
    if(memoUndefined) {
      memoUndefined = false;
      memo = elem;
    } else memo = iteratee(memo, elem, index, list);
  });
  return memo;
};
function reduce (array, combine, seed){
    //var start = seed ;
    each(array,function(value,position,collection){
        seed = combine(seed,value,position)
    })
    return seed;
}

console.log(reduce([10,20,30,40], function(memo, element, i){
        return memo + element + i;
    },10));
// console.log(reduce([10,20,30,40], function(memo, element, i){
//           return memo * element * (i+1);
//     }));
// inputData = {a:"one", b:"two"};
//     _.extend(inputData);
//     assert.deepEqual(_.extend(inputData, {a:"three",c:"four"}, {d:"five",c:"six"}), {a:"three",b:"two",c:"six",d:"five"}
    


function extend1 (destination, sources) {
    var arguments1=[];
    for ( var i = 1; i < arguments.length; i++){
        arguments1.push(arguments[i]);
    }
    each(arguments1,function(value,position,collection){//{a:"three",c:"four"}
    for (var key in value){
        destination[key]=value[key];}
        
    })
     return destination;   
 
}
console.log(extend3({a:"one", b:"two"},{a:"three",c:"four"}, {d:"five",c:"six"}));
console.log(extend2({a:"one", b:"two"},{a:"three",c:"four"}, {d:"five",c:"six"}));

function extend2 (destination, sources) {
    for ( var i = 1; i < arguments.length; i++){
        var arg = arguments[i];
        each(Object.keys(arg),function(value,key,collection){
            destination[value]=arg[value];})}
        return destination;
}

function extend3 (destination, sources) {
    for ( var i = 1; i < arguments.length; i++){
        var arg=arguments[i];
        each(arg,function(value,key,collection){
            destination[key]=arg[key];})}
        return destination;
}

function extend4 (target) {
      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }
      return output;
    };
