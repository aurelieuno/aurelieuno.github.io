/**
1. can we know if simple array of array of object?

1.a why n=n||1 for last,first array underpants functions

2. when using FOR is better than each >exiting a loop with return
indexOf = when looping with each will give you the index of the last one that passed instead of the first one because doesnt know how to get
out of the loop

3. var arg = arguments[i]
arguments.length

function pick (object, property){
    var picked = {};
    for (var i = 1; i < arguments.length ; i++){
        var args = arguments[i];
        picked[args]=object[args];
    }
    return picked;
}

4. Underpants library window_
where can I use my library? uniq3

5. function
each (collection,action){
    action(collection[i],i,collection);
**/
function findIndex (array,test){
     if (Array.isArray(array)) {
        for (var i=0; i< array.length; i++){
            if (test(array[i],i,array)) {return i;}//test is a boolean function, defined array[i] as argument
        }}
        return -1;
}

each(collection, function (start, value, position, collection){ //function not recognize start because EACH action(collection[i],i,collection) 
           start = summarize(start, value, position , collection);


_.reduce = function(collection, summarize, start) {
       _.each(collection, function( value, position, collection) {//EACH >> action(collection[i],i,collection);
            start = summarize(start, value, position + 1, collection); //START is defined in REDUCE
            
_.reduce = function(collection, summarize, start) {
       _.each(collection, summarize(start, value, position, collection) //EACH associates start to collection[i],value to i...       
            
function reduce (list, iteratee, memo){
  var memoUndefined = arguments.length < 3; //Boolean
  each(list, function(elem, index, list){
    if(memoUndefined) {
      memoUndefined = false;
      memo = elem;
    } else memo = iteratee(memo, elem, index, list);
  });
  return memo;
};    
//memo undefined takes value1, then goes back to EACH and elem= value 2 and memo = value 1, inside EACH!


function unique(array){
    return reduce(array,function(uniqueVals,value){//how come uniqueVals =[]?
        if(indexOf(uniqueVals,value)===-1) uniqueVals.push(value);
        return uniqueVals;
    },[]);
}

//reduce (array, function, []) seed is []

6. return statement in higher order functions

7.function invoke (collection, methodName){
    return map (collection, methodName(value));//value is not defined
}

function invoke (collection, methodName){
    return map (collection, function (value, index,collection){
        return methodName(value);
    });
}