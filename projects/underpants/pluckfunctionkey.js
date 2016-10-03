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

function pluck (collection,target){
     return map(collection, function(value){
         return value[target];
     });
 }

 var mycollection = [
        { name: "Ralph", age: 22},
        { name: "Jimmy", age: 13},
        { name: "Carla", age: 20},
        { name: "Olivier", age: 27}
    ];

console.log(pluck(mycollection,"name"));
 
// Amazing, thanks! I got it to work...And I believe I understand this concept now. 
// Each arr[i] object does not necessarily have a .key property... 
// Instead the key value being passed to the pluck function needs to be passed using the bracket notation, 
// ensuring that you are attempting to access the correct property of the object given to the pluck function as the second argument. 
	 	
// Yes, when using bracket notation you can use variables as the key you are trying to access, 
// while using dot notation the key will be what you write. This also helps you when dealing with keys with dots, 
// spaces reserved words etc. obj['my weird key...'] is valid while obj.my weird key... 
// will throw a syntax error. You will also need to write obj['enum'], obj['catch'] when targeting 
