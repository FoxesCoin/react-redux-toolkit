import { useRef } from 'react';
import styled from 'styled-components';

import { TextArea, TextAreaProps } from './text-area';

import { RElement } from 'typings/react';

interface Props extends TextAreaProps {
  value: string;

  minRows?: number;
}

const FIELD_LINE_HEIGHT = 20;

const Area = styled(TextArea)<{ height: number }>`
  position: relative;
  padding: 0.5rem;
  flex: 1 auto;
  resize: none;
  box-sizing: content-box;
  line-height: ${FIELD_LINE_HEIGHT}px;
  height: ${(props) => props.height}px;
`;

export const ResponsiveTextArea: RElement<Props> = (props) => {
  const {
    onChange,
    value,
    className,
    isDisabled,
    placeholder,
    minRows = 1,
    styling,
  } = props;
  const ref = useRef<HTMLTextAreaElement>();
  const rows = ref.current?.value?.split('\n')?.length ?? minRows;
  const height = Math.max(rows, minRows) * FIELD_LINE_HEIGHT;

  return (
    <Area
      onChange={onChange}
      value={value}
      height={height}
      styling={styling}
      className={className}
      isDisabled={isDisabled}
      placeholder={placeholder}
    />
  );
};
