import { ChangeEvent, ChangeEventHandler, MouseEventHandler } from 'react';

export const handleClickEvent =
  <T extends HTMLElement>(callback?: () => void): MouseEventHandler<T> =>
  (event) => {
    if (callback) {
      callback();
    }

    event.preventDefault();
    event.stopPropagation();
    return;
  };

export const handleChangeEvent =
  <E extends HTMLInputElement | HTMLTextAreaElement, V extends string>(
    onChange?: (value: V) => void
  ): ChangeEventHandler<E> =>
  (event) => {
    const value = event.target.value as V;
    if (onChange) {
      onChange(value);
    }
  };

export const handleFileChange =
  (setFile: (file: File) => void) => (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (!files) {
      return;
    }

    setFile(files[0]);
  };
