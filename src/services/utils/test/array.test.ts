import {
  removeItemInArray,
  removeItemInObjectArray,
  toggleItemSimpleArray,
  updateItemInArray,
  updateObjectArray,
} from '../array';

interface Item {
  value: string;
  label: string;
}

const SIMPLE_ARRAY = [1, 2, 3, 4, 5];
const SIMPLE_OBJECT_ARRAY: Item[] = [
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
];

test('removeItemInArray', () => {
  expect(removeItemInArray(SIMPLE_ARRAY, 0)).toEqual([2, 3, 4, 5]);
  expect(removeItemInArray(SIMPLE_ARRAY, -1)).toEqual(SIMPLE_ARRAY);
  expect(removeItemInArray(SIMPLE_ARRAY, SIMPLE_ARRAY.length)).toEqual(
    SIMPLE_ARRAY
  );
  expect(removeItemInArray(SIMPLE_ARRAY, SIMPLE_ARRAY.length - 1)).toEqual([
    1, 2, 3, 4,
  ]);
});

test('switchItemSimpleArray', () => {
  expect(toggleItemSimpleArray({ array: SIMPLE_ARRAY, value: 0 })).toEqual([
    1, 2, 3, 4, 5, 0,
  ]);
  expect(toggleItemSimpleArray({ array: SIMPLE_ARRAY, value: 1 })).toEqual([
    2, 3, 4, 5,
  ]);
});

test('updateItemInArray', () => {
  expect(
    updateItemInArray({ array: SIMPLE_ARRAY, index: 0, newValue: 0 })
  ).toEqual([0, 2, 3, 4, 5]);

  expect(
    updateItemInArray({ array: SIMPLE_ARRAY, index: -1, newValue: 0 })
  ).toEqual(SIMPLE_ARRAY);

  expect(
    updateItemInArray({
      array: SIMPLE_ARRAY,
      index: SIMPLE_ARRAY.length,
      newValue: 0,
    })
  ).toEqual(SIMPLE_ARRAY);
});

test('updateObjectArray', () => {
  expect(
    updateObjectArray({
      array: SIMPLE_OBJECT_ARRAY,
      newValues: { label: 'test' },
      search: { label: '1' },
    })
  ).toEqual([
    {
      label: 'test',
      value: '1',
    },
    {
      label: '2',
      value: '2',
    },
    {
      label: '3',
      value: '3',
    },
  ]);
  expect(
    updateObjectArray({
      array: SIMPLE_OBJECT_ARRAY,
      newValues: { label: 'test' },
      search: { label: 'Not exist value' },
    })
  ).toEqual(SIMPLE_OBJECT_ARRAY);

  expect(
    updateObjectArray({
      array: [
        { label: '1', value: '1' },
        { label: '1', value: '2' },
      ],
      newValues: { value: 'Test' },
      search: { label: '1' },
    })
  ).toEqual([
    { label: '1', value: 'Test' },
    { label: '1', value: '2' },
  ]);
});

test('removeItemInObjectArray', () => {
  expect(removeItemInObjectArray(SIMPLE_OBJECT_ARRAY, { value: '1' })).toEqual([
    SIMPLE_OBJECT_ARRAY[1],
    SIMPLE_OBJECT_ARRAY[2],
  ]);
  expect(
    removeItemInObjectArray(SIMPLE_OBJECT_ARRAY, { value: 'NOT EXIT VALUE' })
  ).toEqual(SIMPLE_OBJECT_ARRAY);
});
