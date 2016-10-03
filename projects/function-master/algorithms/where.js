function where(collection, source) {
  var arr = [];
  for(var i=0;i<collection.length;i++){
    if (where1 (collection[i],source)===true) {
    arr.push(collection[i]);
}
}
return arr;
}

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

//console.log(where1({ "a": 1, "b": 2, "c": 2 }, { "a": 1, "b": 2 ,"d":3}));
