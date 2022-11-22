import { ChangeEvent } from 'react';

import { useEvent } from 'hooks/event';

import { RWrapper } from 'typings/react';

export type FileType = keyof typeof ACCEPT;

interface Props {
  type: FileType;

  setFile: (file: File) => void;
}

export const ACCEPT = {
  image: 'image/*',
  video: 'video/mp4',
  document: '.csv,.xls,.xlsx',
  media: 'image/*,video/mp4',
};

export const UploadWrapper: RWrapper<Props> = (props) => {
  const { className, setFile, type, children } = props;

  const handleChange = useEvent((event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (!files) {
      return;
    }

    setFile(files[0]);
  });

  return (
    <label className={className}>
      <input type="file" accept={ACCEPT[type]} onChange={handleChange} hidden />
      {children}
    </label>
  );
};
