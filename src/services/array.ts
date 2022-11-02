import { deepCopy, getObjectEntries } from './object';

export function removeItemInArray<T>(array: T[], index: number) {
  if (index < 0 || index >= array.length) {
    return array;
  }

  const clone = deepCopy(array);
  clone.splice(index, 1);

  return clone;
}

export function toggleItemSimpleArray<T extends string | number>(parameters: {
  array: T[];
  value: T;
}): T[] {
  const { array, value } = parameters;
  const index = array.findIndex((item) => item === value);

  if (index === -1) {
    return [...array, value];
  }

  return removeItemInArray(array, index);
}

export function updateItemInArray<T>(parameters: {
  array: T[];
  index: number;
  newValue: T;
}) {
  const { array, index, newValue } = parameters;

  if (index < 0 || index >= array.length) {
    return array;
  }
  const clone = deepCopy(array);
  clone[index] = newValue;

  return clone;
}

export function updateObjectArray<T extends {}>(parameters: {
  array: T[];
  newValues: Partial<T>;
  search: Partial<T>;
}): T[] {
  const { array, newValues, search } = parameters;

  const searchData = getObjectEntries(search);
  const checkFields = (item: T) =>
    searchData.every(([key, value]) => item[key] === value);

  if (!array.some(checkFields)) {
    return array;
  }

  return deepCopy(array).map((item) =>
    checkFields(item) ? { ...item, ...newValues } : item
  );
}

export function removeItemInObjectArray<T extends {}>(
  array: T[],
  fields: Partial<T>
) {
  const index = array.findIndex((item) =>
    getObjectEntries(fields).every(([key, value]) => item[key] === value)
  );

  if (index === -1) {
    return array;
  }

  const clone = deepCopy(array);
  clone.splice(index, 1);

  return clone;
}
