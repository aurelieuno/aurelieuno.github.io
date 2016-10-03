function each (collection,action){
    if(Array.isArray(collection)){
        for (var i =0 ; i < collection.length; i++) {
            action(collection[i], i , collection);
        }
    } else {
        for(var key in collection){
            action(collection[key],key,collection);
        }
    }
}

function each2 (collection,action){
    if(Array.isArray(collection)){
        for (var i =collection.length-1 ; i > -1; i--) {
            action(collection[i], i , collection);
        }
    }
}

function  indexOf(array, target){
    if (Array.isArray(array) === true) {
        for (var i=0; i< array.length; i++)
            if (array[i] === target) {return i;}
        }
        return -1;
    } 
    
function reverse (array){
    var reverseArray=[];
    each2 (array, function (value){
        reverseArray.push(value);
    });
    return reverseArray;
}

function unique (array){
    var unity=[];
   each2 (array, function (value, position){
       var unity1= array.slice(0, position );
       //delete array [position];
       if (unity1.indexOf(value)===-1){
           unity.push(value);
       }
   });
  
  return reverse(unity);
}

console.log(unique([1,2,2,4,5,6,5,2]));