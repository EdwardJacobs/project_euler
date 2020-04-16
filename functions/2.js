function sumEvenFibs(number) {
// get an array of fib numbers
// select the evens with a max value of 4 million
// return the sum of all evens
  let arr = [0,1];
  let sum = 0;

  for (let i=2; i<number; i++) {
    arr.push(arr[i-2]+arr[i-1]);
  }

  for (let i=0; i<arr.length; i++) {
    if (arr[i] < 4000000 && arr[i]%2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

module.exports = sumEvenFibs;
