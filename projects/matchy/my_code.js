/* global _ */

//step 1//
var animal={};
animal.species='cat';
animal['name']='Tom';
animal.noises=[];
animal.friends=["Jean"];
console.log(animal);

//step 2
var noises=[];
noises[0]='meow';
noises.push('aww');
noises.unshift('oh');
noises[noises.length]='ah';
console.log(noises);
console.log(noises.length);
console.log(noises[noises.length-1]);

//step 3
animal['noises']=noises;
animal.noises[animal.noises.length]='hi';
console.log(animal);

//step 4
//1. thru bracket , thru dot
//2.thru bracket number

//step 5
//step 6
var animals =[];
animals.push(animal);
console.log(animals);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'], friends: ["Ben"] };
animals.push(duck);
var dog = { species: 'dog', name: 'James', noises: ['woof', 'ouaf', 'ouif', 'weee'] ,friends: ["Jane","Dan"]};
var cow = { species: 'cow', name: 'Normandy', noises: ['muu', 'maak', 'miii', 'mooo'] ,friends: ["Molly"]};
animals.push(dog);
animals.push(cow);
console.log(animals);
console.log(animals.length);

//step 7
//1-array of objects
//2-list = array, objects can hold many propoerties, easy to prganize with index
var friends=[];
//The Math.random() function returns a floating-point, pseudo-random number in the range [0, 1)
//that is, from 0 (inclusive) up to but not including 1 (exclusive),
function getRandom(min,max) {
  return Math.random()* (max - min) + min;
}

var i =Math.floor(getRandom(0,animals.length-1));
console.log(i);

friends.push(animals[i].name);
console.log(friends);
animals[0]['friends'].push(friends[0]);
console.log(animals);


//Part 2
//step 1
function search(NameAnimal) {
    for ( var y= 0; y < animals.length ; y++){
        if (NameAnimal.toLocaleLowerCase() === animals[y].name.toLocaleLowerCase()){
            return animals[y];
        } 
    }
}

console.log(search("James"));
//////////////////////////////////////////////////
// function search2(NameAnimal) {
//   var array=[];
//   _.each(animals,function(value){
//         if (NameAnimal === value['name']){
//             array.push(value);}
//     });
//     return array;
// }
// console.dir(search2("Normandy"));
    
    
    
//step 2
function edit (NameAnimal,AnimalObject){
    for ( var y= 0; y < animals.length ; y++){
        if (NameAnimal.toLocaleLowerCase() === animals[y].name.toLocaleLowerCase()){
            return animals[y]=AnimalObject;
        } 
    }
    
}
   
var fish = { species: 'fish', name: 'Nemo', noises: ['ah', 'oh', 'hey'],friends:['Daniel','Maddy'] };
console.log(edit("Jerome", fish));
console.log(animals);
animals.push(duck) ; 
    
//step 3

function remove (NameAnimal){
    for ( var y= 0; y < animals.length ; y++){
        if (NameAnimal.toLocaleLowerCase() === animals[y].name.toLocaleLowerCase()){
            return animals.splice(y,1);
        } 
    }
}

//console.log(remove ("Normandy"));
console.log(animals);
//step 4
function create (newanimal){
    if (newanimal.name.length > 0 && newanimal.species.length > 0){
    for ( var y= 0; y < animals.length ; y++){
        if (newanimal.name.toLocaleLowerCase() == animals[y].name.toLocaleLowerCase()){
            return animals[y].name;
        } else {
              return animals.push(newanimal);
}
}
}
}
var bird = { species: 'bird', name: 'Gana', noises: ['wee', 'waa', 'woo'],friends:['Paul','Jordan'] };


console.log(create(bird));
console.log(animals);