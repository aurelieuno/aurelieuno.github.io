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

function extend (){
    var array =[];
    for (var i = 0; i < arguments.length; i++)  {
    array.push(arguments[i]);
    }
    for (var i = 1; i < array.length; i++) {
        each(Object.keys(array[0]), function(value, position, collection){
            if(Object.keys(array[i]).indexOf(value)!==-1){ array[0][value]=array[i][value];}
        });
        each(Object.keys(array[i]), function(value, position, collection){
            array[0][value]=array[i][value];
        });
    }
    return array[0];
}



var obj1= {a:"one", b:"two"};
var obj2= {c: "three", d: "four"};
var obj3= {a: "five", f: "six"};
var obj4= {g: "seven", h: "eight"};
console.log(extend(obj1, obj2, obj3));

var array = 
[ { a: 'one', b: 'two' },    //['a','b']
  { c: 'three', d: 'four' }, //['c','d']
  { e: 'five', f: 'six' },   //['e','f']
  { g: 'seven', h: 'eight' } ];
  
//console.log(array[0]);
//console.log(array[0]['a']);

