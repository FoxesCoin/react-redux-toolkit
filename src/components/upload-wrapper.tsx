import { ChangeEvent } from 'react';
import styled from 'styled-components';

import { useEvent } from 'services/hooks';

import { RWrapper } from 'types/react';

export type FileType = keyof typeof ACCEPT;

interface Props {
  type: FileType;

  setFile: (file: File) => void;
}

const Input = styled.input`
  display: none;
`;

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
      <Input type="file" accept={ACCEPT[type]} onChange={handleChange} />
      {children}
    </label>
  );
};
