// import { it } from 'eslint/lib/rule-tester/rule-tester';
import { getMinSquaredNumber } from './index.js';
it('should output min number of array with abs ', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(result).toEqual(4);
});
