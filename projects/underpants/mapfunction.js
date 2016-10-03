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

var inputObject = {"a":1, "b":2, "c":3, "d":4};

var result = map(inputObject, function(v,k,o){
        return k + v * Object.keys(o).length;
    });

console.log(result);