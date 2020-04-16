const sumMultiples = require('../functions/1');

test('sumMultiples function exists', () => {
  expect(sumMultiples).toBeDefined();
});

test('sumMultiples 100', () => {
  expect(sumMultiples(100)).toEqual(2318);
})


