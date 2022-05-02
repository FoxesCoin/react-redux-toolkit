import { useState } from 'react';

import { Switch } from 'components/switch';
import { Radio } from 'components/radio';

import { toggleItemSimpleArray } from 'services/utils';

import { RPage } from 'types/react';

import { CheckboxPageStyles as Styled } from './checkbox-page.styles';

const CHECKBOX_LIST = ['1', '2', '3'].map((data, key) => ({ data, key }));

export const CheckboxPage: RPage = () => {
  const [checkbox, setCheckbox] = useState<string[]>([]);
  const [radio, setRadio] = useState<string>(CHECKBOX_LIST[0].data);

  const handleCheck = (value: string) => {
    setCheckbox((current) => toggleItemSimpleArray({ array: current, value }));
  };

  return (
    <Styled.Wrapper>
      <Styled.FiledList>
        <Styled.Legend>Switch (multiple choose)</Styled.Legend>
        {CHECKBOX_LIST.map(({ data, key }) => (
          <Switch
            key={key}
            value={data}
            isChecked={checkbox.includes(data)}
            onCheck={handleCheck}
          />
        ))}
      </Styled.FiledList>
      <Styled.FiledList>
        <Styled.Legend>Checkbox</Styled.Legend>
        {CHECKBOX_LIST.map(({ data, key }) => (
          <Radio
            key={key}
            value={data}
            isChecked={checkbox.includes(data)}
            onCheck={handleCheck}
          />
        ))}
      </Styled.FiledList>
      <Styled.FiledList>
        <Styled.Legend>Switch (single choose)</Styled.Legend>
        {CHECKBOX_LIST.map(({ data, key }) => (
          <Switch
            key={key}
            value={data}
            isChecked={radio === data}
            onCheck={setRadio}
          />
        ))}
      </Styled.FiledList>
      <Styled.FiledList>
        <Styled.Legend>Checkbox</Styled.Legend>
        {CHECKBOX_LIST.map(({ data, key }) => (
          <Radio
            key={key}
            value={data}
            isChecked={radio === data}
            onCheck={setRadio}
          />
        ))}
      </Styled.FiledList>
      <Styled.FiledList>
        <Styled.Legend>Switch (disabled)</Styled.Legend>
        {CHECKBOX_LIST.map(({ data, key }) => (
          <Switch
            key={key}
            value={data}
            isChecked={false}
            onCheck={setRadio}
            isDisabled
          />
        ))}
      </Styled.FiledList>
    </Styled.Wrapper>
  );
};
