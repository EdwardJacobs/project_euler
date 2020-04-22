// find all primes less than number
// return highest prime less than number
function largestPrime(number) {
  arr = [];

  for (let i=2; i<number; i++) {
    if (number%i != 0 && number != i) {
      arr.push(arr[i]);
    }
  }
}

module.exports = largestPrime;
