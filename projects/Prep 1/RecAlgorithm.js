var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    var countLoop=0;
    
    while(min<=max) {
        guess = Math.floor((max+min)/2);
        countLoop+=1;
        console.log("guess is " + guess);
        console.log("min is " + min);
        if(array[guess]===targetValue){
            console.log(countLoop);
            return guess;}
        else if (array[guess]<targetValue){min= guess+1;}
        else{max=guess-1;}
        //println(guess);
    }
	return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

//var result = doSearch(primes, 73);
//console.log(result);

var swap = function(array, firstIndex, secondIndex) {
    var temp= array[firstIndex];//holding it in a variable

	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
    
};

//console.log(indexOfMinimum([22, 11, 99, 88, 9, 7, 42],0));

var indexOfMinimum = function(array, startIndex) {
    var minValue = array[startIndex];
    var minIndex = startIndex;
    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 
console.log(indexOfMinimum([22, 11, 99, 88, 9, 7, 42],0));


var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};


var selectionSort = function(array) {
    for (var i=0;i<array.length;i++){
        var min = indexOfMinimum(array,i);
        swap(array,i,min);
    }
    return array;
  
};


var array2 = [-2, 0, 56, 28, 4, 6, 12];
var sorted2 = selectionSort(array2);
console.log(sorted2);

//////RECURSSIVE ALGORITHMS//////////////
// Returns the first character of the string str
var firstCharacter = function(str) {
    return str.slice(0, 1);
};

// Returns the last character of a string str
var lastCharacter = function(str) {
    return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
var middleCharacters = function(str) {
    return str.slice(1, -1);
};

var isPalindrome = function(str) {
    // base case #1
    if(str.length < 2 ) {return true;}
    // base case #2
    if(firstCharacter(str) !==lastCharacter(str)){return false;}
    // recursive case
     return isPalindrome(middleCharacters(str));
};
///////////////RECURSSIVE ALGORITHMS 2///////////////////////////////////
var isEven = function(n) {
    return n % 2 === 0;
};

var isOdd = function(n) {
    return !isEven(n);
};

var power = function(x, n) {
    println("Computing " + x + " raised to power " + n + ".");
    // base case
    if (n===0){return 1;}
    // recursive case: n is negative 
    if (n<0){
        return 1/power(x, -n);
    }
    // recursive case: n is odd
    if (isOdd(n)){
        return power(x, n-1)*x;
    }
    // recursive case: n is even
    if (isEven(n)){
        var a= power(x, n/2);
        return a*a;
    }
};
