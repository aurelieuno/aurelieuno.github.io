/**What I did here is create a FIND1 and 2 function with a callback function already decided
 * function findCherries(fruit) { 
    return fruit.name === 'cherries';
}
**/
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

function find1 (collection, item){
    var holder = undefined;
    collection.forEach(function (value, position, collection){//how to return an item inside a loop? The only thing you
    //can do is push value or have a var or use for instead of each
        if (value == item) { holder = value;
        }});
        return holder;
}  

function find2 (collection, item){
    var holder = undefined;
    collection.forEach(function (value, position, collection){
        if (typeof value !== 'object'){
            if (value == item) { holder = value;
            }
        } else {
        each(value,function(value1,position,collection){//knows what value is because EACH is well defined
             if (value1 == item) { holder = collection;
             }})}});
return holder;
} 
//console.log(find2([1,2,3],2));

var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];
//console.log(find2(inventory,'bananas'));

var inventory2 = [
    ['apples', 2],
    [ 'bananas',  0],
    [ 'cherries',  5]
];

function findCherries(fruit) { 
    return fruit.name === 'cherries';
}
//console.log(find2(inventory2,'bananas'));

///////////////////////////////////////////////////////////////////////////
function find3 (collection, test){
    if (Array.isArray(collection)) {
        var found = findIndex(collection,test)
//    } else {
//        var found = findKey(collection,test)
    }
    return collection[found];
}

function findIndex (array,test){
     if (Array.isArray(array)) {
        for (var i=0; i< array.length; i++){
            if (test(array[i],i,array)) {return i;}//test is not a function
        }}
        return -1;
}

console.log(find3(inventory,findCherries));
console.log(findIndex(inventory,findCherries));