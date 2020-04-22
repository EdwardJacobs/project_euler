// make array of factors
// filter prime numbers
// return highest prime less than number
function largestPrimeFactor(number) {
  let arr = [];

  for (let i=0; i<number; i++) {
    if (number%i === 0) {
      arr.push(i);
    }
  }

  arr = arr.filter((num) => {
    for (let i=2; i<=Math.sqrt(num); i++) {
      if (num%i === 0) return false;
    }
    return true;
  })
  return arr.slice(-1)[0];
}

console.log(largestPrimeFactor(100));

module.exports = largestPrimeFactor;
