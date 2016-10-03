function sumPrimes1(num) {
  var truth=false;
  var i=6;
  var arr=[2,3,5];
  while(i<num+1){
  
    for (var j=0;j<arr.length;j++){
      
      if (i<num+1 && i%arr[j]===0) {truth=true;}
    }
    if(truth===false){
      arr.push(i);
      i=i+1;
      truth=false;
    }
      else {
        i=i+1;
        truth=false;
      }
  }
      return arr.reduce(function(prev, curr){ return prev + curr});
}

console.log(sumPrimes1(977));   
////////////////////////////////////////////////////////////////////////////////////
function sumPrimes(num) {
  var res = 0;

  // FUnction to get the primes up to max in an array
  function getPrimes(max) {
    var sieve = [];
    var i;
    var j;
    var primes = [];
    for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }

    return primes;
  }

  // Add the primes
  var primes = getPrimes(num);
  for (var p = 0; p < primes.length; p++) {
    res += primes[p];
  }

  return res;
}


  function getPrimes(max) {
    var sieve = [];
    var i;
    var j;
    var primes = [];
    for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }

    return primes;
  }
console.log(getPrimes(10));   