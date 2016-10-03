function each(collection,action){
    if(Array.isArray(collection)){      //Array is constructor function >A
       for (var i = 0; i<collection.length ; i++){
           action(collection[i], i, collection); //client code
       }
    }
    else {
        for (var key in collection){
            action(collection[key], key, collection);
        }
    }
}

var testArray = [
        {name:"John",  age: 40, children: 2,
            company: { name: "MegaCorp", employees: 200}},
        {name:"Sue",   age: 30, children: 1,
            company:{ name: "MegaCorp", employees: 200}},
        {name:"Mary",  age: 55, children: 3,
            company:{ name: "MegaCorp", employees: 200}},
        {name:"Jack",  age: 20, children: 0,
            company:{ name: "MiniCorp", employees: 100}}];

function filter(collection, test){
    var filtered=[];
    each(collection, function(value, position, collection){
        if (test(value, position, collection)) {
        filtered.push(value);   
}
     });
     return filtered;
 }
var abc= filter(testArray, function(customer){
  if (customer.age >= 30) return customer.name; 
});

console.log(abc);

