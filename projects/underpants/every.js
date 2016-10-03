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

function every (collection, transform){
  transform = transform || function (value) {return value};
  //if (collection.indexOf(null)!==-1 || collection.indexOf("")!==-1){
  //    return false;
  //}
      var truth=true;
      each(collection, function(value, position,collection) {
          if (transform(value)===false) {truth = false;
          }
      });
      return truth;
  }

//console.log(every5([2,5,7,8]));
//console.log(every5([2,4,7], function(e){return e % 2 === 0}));
var inputObject = {a:"one",b:"two",c:"three"};
var result = every(inputObject, function(v,k,o){
        return ["aone3","btwo3","cthree3"].indexOf(k+v+Object.keys(o).length) !== -1;
    })
console.log(result);