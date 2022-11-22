import { useState } from 'react';

import { TextField } from 'components/text-input';

import { RElement } from 'typings/react';

import { InputStyled } from 'components/input-base/input-base.constants';
import { Theme } from 'styles/theme';
import { InputListStyled as Styled } from './input-list.styled';

interface Props {
  title: string;
  styling: InputStyled;
}

export const InputList: RElement<Props> = (props) => {
  const { className, title, styling } = props;
  const [value, setValue] = useState('');

  return (
    <Styled.FiledList className={className}>
      <Styled.Legend>{title}</Styled.Legend>
      <Theme.Paragraph fontSize="h4">Default</Theme.Paragraph>
      <TextField
        value={value}
        styling={styling}
        placeholder={title}
        onChange={setValue}
      />
      <Theme.Paragraph fontSize="h4">With error</Theme.Paragraph>
      <TextField
        value={value}
        styling={styling}
        placeholder={title}
        onChange={setValue}
        isError
      />
      <Theme.Paragraph fontSize="h4">Disabled</Theme.Paragraph>
      <TextField
        value={value}
        styling={styling}
        placeholder={title}
        onChange={setValue}
        isDisabled
      />
      <Theme.Paragraph fontSize="h4">Disabled and with error</Theme.Paragraph>
      <TextField
        value={value}
        styling={styling}
        placeholder={title}
        onChange={setValue}
        isError
        isDisabled
      />
    </Styled.FiledList>
  );
};
