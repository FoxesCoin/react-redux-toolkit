import { deepCopy } from '../object';

const ITEM = { value: 1 };
const NUMBER_ARRAY = [1, 2, 3];
const IMAGE_OBJECT_EXAMPLE = { image_url: 'http://', x: 0, y: 0, zoom: 1 };

test('Deep copy test', () => {
  expect(deepCopy([])).toEqual([]);
  expect(deepCopy(NUMBER_ARRAY)).toEqual(NUMBER_ARRAY);
  expect(deepCopy([ITEM, ITEM, ITEM])).toEqual([ITEM, ITEM, ITEM]);
  expect(deepCopy(IMAGE_OBJECT_EXAMPLE)).toEqual(IMAGE_OBJECT_EXAMPLE);
});
