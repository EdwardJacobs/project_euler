const largestPrimeFactor = require('../functions/3');

test('largestPrimeFactor function exists', () => {
  expect(largestPrimeFactor).toBeDefined();
})

test('largestPrimeFactor 100', () => {
  expect(largestPrimeFactor(100)).toEqual(5);
})

