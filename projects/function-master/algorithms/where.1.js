function where(collection, source) {
    var arr1=Object.keys(source);
  return filter(collection, function(value,index){
      for (var i=0;i<arr1.length;i++){
          if (!value.hasOwnProperty(arr1[i]) || source[arr1[i]]!==value[arr1[i]]) { return false;
          } 
      }
      return true;//how to get rid of the true loggin problem with for loop
  });
}

      
//     value.hasOwnProperty
//     if (where1(value,source)===true) {return collection[index];}
//   });
// }
  

console.log(where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));



function where1 (object1,object2){
  var arr1=Object.keys(object2);
  var arr=[];
      
      for (var key2 in object2) {
      for (var key1 in object1){
      if (key2===key1 && object2[key2]===object1[key1]) {arr.push("true");
      }
    }
      } 
      if (arr1.length===arr.length) {return true;
      } else {return false;}
}
function where1 (object1,object2){
  var arr1=Object.keys(object2);
  var arr=[];
      
      for (var key2 in object2) {
      for (var key1 in object1){
      if (key2===key1 && object2[key2]===object1[key1]) {arr.push("true");
      }
    }
      } 
      if (arr1.length===arr.length) {return true;
      } else {return false;}
}
//console.log(where1({ "a": 1, "b": 2, "c": 2 }, { "a": 1, "b": 2 ,"d":3}));
function filter (collection, test) {
   var filtered = [];
   each (collection, function (value, position, collection){
     if(test(value, position, collection)) { filtered.push(value); }
   });
   return filtered;
 };
 
 function each(collection,action){
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
//  _.every=function (collection, transform){
//   transform = transform || function (value) {return value};
//   if ( Array.isArray(collection) ===true && (_.indexOf(collection,null)!==-1 || _.indexOf(collection,"")!==-1)){
//       return false;
//     }
//       var truth=true;
//       _.each(collection, function(value, position, collection) {
//           if (transform(value,position,collection)===false) {truth = false;
//           }
//       });
//       return truth;
//   }


