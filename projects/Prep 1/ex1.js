var fruits = ["Apple", "Banana"];

console.log(fruits.length); //2

fruits.forEach(function (item, index, array) {
  console.log(item, index);
});//Apple 0 Banana 1

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i], i);
}

/////
var object1 = {
  foo: "bar",
  age: 42,
  baz: { myProp: 12 },
}
console.log(object1.foo); // "bar"
console.log(object1["age"]); // 42

/////

