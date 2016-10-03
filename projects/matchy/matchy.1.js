var animals =                                                                                                                                                                     
[ { species: 'cat',                                                                                                                                                                          
    name: 'Tom',                                                                                                                                                                             
    noises: [ 'oh', 'meow', 'aww', 'ah', 'hi' ],                                                                                                                                             
    friends: ['Jean'] },                                                                                                                                                                       
  { species: 'duck',                                                                                                                                                                         
    name: 'Jerome',                                                                                                                                                                          
    noises: [ 'quack', 'honk', 'sneeze', 'woosh' ],                                                                                                                                          
    friends: 'Ben' },                                                                                                                                                                        
  { species: 'dog',                                                                                                                                                                          
    name: 'James',                                                                                                                                                                           
    noises: [ 'woof', 'ouaf', 'ouif', 'weee' ],                                                                                                                                              
    friends: 'Jane' },                                                                                                                                                                       
  { species: 'cow',                                                                                                                                                                          
    name: 'Normandy',                                                                                                                                                                        
    noises: [ 'muu', 'maak', 'miii', 'mooo' ],                                                                                                                                               
    friends: 'Molly' } ];     
    
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
function search2(NameAnimal) {
  var array=[];
  each(animals,function(value){
        if (NameAnimal === value['name']){
            array.push(value);}
    });
    return array;
}
console.log(search2("Normandy"));