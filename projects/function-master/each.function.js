//>defining EACH in function 1
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

function isFriend(name,object){
  var contained = false;
  each(object.friends, function(value) {
    if(value === name) {contained = true; }
  });
  return contained;
}

console.log((isFriend("jimmy",{friends:["bobby", "ralf"]})));




