import { roundNumber } from '../number';

test('Round number', () => {
  expect(roundNumber(31.689)).toBe(31.7);
  expect(roundNumber(31.1689)).toBe(31.2);
  expect(roundNumber(31.1689, 2)).toBe(31.17);
  expect(roundNumber(31, 2)).toBe(31);
});
