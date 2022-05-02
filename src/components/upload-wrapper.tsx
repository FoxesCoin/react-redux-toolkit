import styled from 'styled-components';

import { handleFileChange } from 'services/utils';

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

  return (
    <label className={className}>
      <Input
        type="file"
        accept={ACCEPT[type]}
        onChange={handleFileChange(setFile)}
      />
      {children}
    </label>
  );
};
