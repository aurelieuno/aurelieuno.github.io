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


function pick(o,key){
    var array1= Object.keys(o);
    var array2=[];
    for (var i = 1; i < arguments.length; i++)  {
    array2.push(arguments[i]);
    }
    each(array1,function(value){
        if (array2.indexOf(value)===-1) { delete o[value];}
    });
    return o;
}

var obj1=  {job:"teacher", fruit:"banana",name:"John",  age: 40, children: 2,
            company: { name: "MegaCorp", employees: 200}};

console.log(pick(obj1,'fruit','name','age'));


