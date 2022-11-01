import { addAlphaToHEX } from 'services/color';

it('Correct HEX', () => {
  expect(addAlphaToHEX('#223322', 1)).toBe('rgba(34, 51, 34, 1)');
  expect(addAlphaToHEX('#222', 0.16)).toBe('rgba(34, 34, 34, 0.16)');
  expect(addAlphaToHEX('#443322', 1)).toBe('rgba(68, 51, 34, 1)');
  expect(addAlphaToHEX('#3b3c3c', 1)).toBe('rgba(59, 60, 60, 1)');
});

it('Alpha too large', () => {
  expect(addAlphaToHEX('#223322', 2)).toBe('rgba(34, 51, 34, 1)');
});

it('Alpha is negative', () => {
  expect(addAlphaToHEX('#223322', -1)).toBe('rgba(34, 51, 34, 0)');
});

it('Incorrect format of HEX', () => {
  // Don't have 1 symbol
  expect(() => addAlphaToHEX('#22332', 0)).toThrow();
  // Too short
  expect(() => addAlphaToHEX('#2', 0)).toThrow();
  // Too long
  expect(() => addAlphaToHEX('#2222222222', 0)).toThrow();
});

it('Function got rgb but wait HEX', () => {
  expect(() => addAlphaToHEX('rgb(34, 51, 34)', 0)).toThrow();
});

it('HEX with alpha', () => {
  expect(addAlphaToHEX('#22332222', 1)).toBe('rgba(34, 51, 34, 1)');
  expect(addAlphaToHEX('#2222', 1)).toBe('rgba(34, 34, 34, 1)');
  expect(addAlphaToHEX('#44332222', 1)).toBe('rgba(68, 51, 34, 1)');
});
