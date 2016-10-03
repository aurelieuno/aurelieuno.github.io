//>defining EACH in function 1
function each (collection,action){
    if(Array.isArray(collection)){
        for (var i =0 ; i < collection.length; i++) {
            action(collection[i]);
        }
    } else {
        for(var key in collection){
            action(collection[key],key,collection);
        }
    }
}

var data = [
                    {name: "Jimmy", friends:["Sara", "Liza"]},   
                    {name: "Bob", friends:[]},                   
                    {name: "Liza", friends: ["Jimmy"]},          
                    {name: "Sara", friends: ["Jimmy"]}                 
                ];
//jimmy,bob,liza,sara
//["Sara", "Liza","Jimmy"]
//["Bob"]
//["Liza","Jimmy"]
//["Sara","Jimmy"]

function nonFriends(name1, data){
  
  var TotalFriends=[];
  var NonFriends=" ";

  each(data, function(value) {
    TotalFriends.push(value.name); 
  });
  
  each(data, function(value) {
    value.friends.push(value.name);
  });
  
  each(data, function(value) {
    if(name1===value.name) {
        NonFriends = symmetric_difference(value.friends,TotalFriends);
    }
  });
  return NonFriends;
}
     

console.log(nonFriends("Jimmy",data));

function symmetric_difference(a1, a2) {
  var result = [];
  for (var i = 0; i < a1.length; i++) {
    if (a2.indexOf(a1[i]) === -1) {
      result.push(a1[i]);
    }
  }
  for (i = 0; i < a2.length; i++) {
    if (a1.indexOf(a2[i]) === -1) {
      result.push(a2[i]);
    }
  }
  return result;
}

console.log(symmetric_difference([1,2,3,4,5], [2,3,4,5,6,7,8]));