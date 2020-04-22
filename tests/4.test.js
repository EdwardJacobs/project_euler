const palindrome = require('../functions/4');

test('palindrome function exists', () => {
  expect(palindrome).toBeDefined();
})

test('palindrome', () => {
  expect(palindrome()).toEqual(906609);
})
