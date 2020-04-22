function palindrome() {
  let max = 0;

  for (let i=0; i<1000; i++) {
    for (let j=0; j<1000; j++) {
      let result = i*j;
      if (result.toString().split('').join('') == result.toString().split('').reverse().join('') && result > max) {
        max = result;
      }
    }
  }
  return max;
}

module.exports = palindrome;
