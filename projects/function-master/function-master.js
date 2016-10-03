//function 1
//objectValues() : Should take an object and return its values in an array 
function objectValues(object){
    var values=[];
    each(object,function(value){
        values.push(value);
    });
  return values;
}


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


//function 2
//keysToString() : Should take an object and return all its keys in a string each separated with a space
function keysToString(object) {
    var keys = Object.keys(object);
    return keys.join(" ");
}

////>>testing function 2
var an_obj1 = { name: 'lili', age: 18, hair: 'brown', 17: 17, noises: ["ah","oh","hi"] };
console.log(keysToString(an_obj1));

//function 3
//valuesToString() : Should take an object and return all its string values in a string each separated with a space 
function valuesToString(object) {
  var keys = [];
  for (var key in object) {
       keys.push(object[key]);
  }
  var passed = [];
  for (var i = 0; i < keys.length; i++) {
    if (typeof keys[i] ==="string"){
      passed.push(keys[i]);
  }
  }
  return passed.join(" ");
}   
//////>>>>>>why not working?>>>>>>////////
function valuesToString2(object) {
  var keys = [];
  for (var key in object) {
       keys.push(object[key]);
  }
  filter(keys,function(value){
        return typeof value === "string";
    });
    return keys.join(" ");
}
//>>>defining FILTER
function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

//function 4
//arrayOrObject() : Should take one argument and return 'array' if its an array and 'object' if its an object (1, 0, 1)Rerun
function arrayOrObject(argument){
    if(Array.isArray(argument)){
        return "array";
    } else {
        return "object";
}
}

//function 5
//capitalizeWord() : Should take a string of one word, and return the word with its first letter capitalized
function capitalizeWord (string){  
  //if (typeof string ==="string"){
    return string.charAt(0).toUpperCase()+string.slice(1);
 // } else {
 //   return "not a string";
 // }
}

//function 6
//capitalizeAllWords() : Should take a string of words and return a string with all the words capitalized 
function capitalizeAllWords (string){  
  var string1= string.split(' ');
  return map(string1,capitalizeWord).join(' ');
  }

//>defining MAP in function 6
function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
  return mapped;
}

console.log("this is a great world".split(' '));                                    //[ 'this', 'is', 'a', 'great', 'world' ]
console.log(map([ 'this', 'is', 'a', 'great', 'world' ],capitalizeWord));          //[ 'This', 'Is', 'A', 'Great', 'World' ]
console.log(capitalizeAllWords("this is a great world"));                         //This Is A Great World

//function 7
//welcomeMessage() : Should take an object with a name property and return 'Welcome <Name>!'
function welcomeMessage(object){
  var name= capitalizeWord (object.name);
  return "Welcome "+name+"!";
  }

//function 8
//profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>'
function profileInfo(object){
  return capitalizeWord (object.name)+" is a "+capitalizeWord (object.species);
}

//function 9
//maybeNoises() : Should take an object, if this object has a noises array 
//return them as a string separated by a space, if there are no noises return 'there are no noises'
function maybeNoises(object){
  if (object.hasOwnProperty("noises") && Array.isArray(object.noises) && object.noises.length>0){
    return object.noises.join(' ');
  } else {
    return "there are no noises";
  }
}
//function 10
//hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, 
//otherwise return false.
function hasWord(string, target){
  var string1 = string.split(' '); //returns an array
  var contained = false;
  each(string1, function(value) {
    if(value === target) {contained = true; }
  });
  return contained;
}

//function 11
//addFriend() : Should take a name and an object and add the name to the object's friends array then return the object
function addFriend(name, object){
  object.friends.push(name);
  return object;
  
}

//function 12
//isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
function isFriend(name,object){
  var contained = false;
  each(object.friends, function(value) {
    if(value === name) {contained = true; }
  });
  return contained;
}


//function 13
//nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with

function nonFriends0 (name,people){
  return filter (people,(person) => (person.name !== name && person.friends.indexOf(name)===-1));
}
///
function nonFriends1(name1, data){
  
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
///   
function nonFriends (name, people){
  var nonfriends=[];
  each(people,function(person){
    if (person.name !== name) {
      if(person.friends.indexOf(name)===-1){
        nonfriends.push(person.name)
      }
    }
  });
  return nonfriends;
}
//>>>defining DIFFERENCE function
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

//function 14
//updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. 
//If <key> does not exist on <object> create it.
function updateObject(object, key, value){
    object[key] = value;
    return object;
}


//function 15
//removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>
function removeProperties(object,array){
  for (var i =0 ; i < array.length; i++) {
  //each(array,function(value){
    for (var key in object){
    if (array[i]===key){
      delete object[key];
    }
    }
  }
    return object;

}

var data = {a: "one", b: "two", "hokey": false};
var array=["a","hokey"];
removeProperties(data,array);
console.log(data);


//function 16
//dedup() : Should take an array and return an array with all the duplicates removed

function dedup(array){
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]!==array[i+1]){
      passed.push(array[i]);
  } 
  }  
  return passed;
}