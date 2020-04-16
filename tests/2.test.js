const sumEvenFibs = require('../functions/2');

test('sumEvenFibs function exists', () => {
  expect(sumEvenFibs).toBeDefined();
})

test('sumEvenFibs 10', () => {
  expect(sumEvenFibs(10)).toEqual(44);
});

test('sumEvenFibs 50', () => {
  expect(sumEvenFibs(50)).toEqual(4613732);
});

test('sumEvenFibs 100', () => {
  expect(sumEvenFibs(100)).toEqual(4613732);
});


