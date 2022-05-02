import { parseJson } from '../json-parse';

test('parseJson', () => {
  expect(parseJson('')).toBeUndefined();
  expect(parseJson('{}')).toEqual({});
});
