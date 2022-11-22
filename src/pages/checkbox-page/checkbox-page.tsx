import { useState } from 'react';

import { Radio } from 'components/radio';
import { Switch } from 'components/switch';

import { toggleItemSimpleArray } from 'services/array';

import { RPage } from 'typings/react';

import { Theme } from 'styles/theme';
import { CheckboxPageStyles as Styled } from './checkbox-page.styles';

const CHECKBOX_LIST = ['1', '2', '3'].map((data, key) => ({ data, key }));

const CheckboxPage: RPage = () => {
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
          <label key={key}>
            <Switch
              value={data}
              isChecked={checkbox.includes(data)}
              onChange={handleCheck}
            />
            <Theme.Text>{data}</Theme.Text>
          </label>
        ))}
      </Styled.FiledList>
      <Styled.FiledList>
        <Styled.Legend>Checkbox</Styled.Legend>
        {CHECKBOX_LIST.map(({ data, key }) => (
          <label key={key}>
            <Radio
              value={data}
              isChecked={checkbox.includes(data)}
              onCheck={handleCheck}
            />
            <Theme.Text>{data}</Theme.Text>
          </label>
        ))}
      </Styled.FiledList>
      <Styled.FiledList>
        <Styled.Legend>Switch (single choose)</Styled.Legend>
        {CHECKBOX_LIST.map(({ data, key }) => (
          <label key={key}>
            <Switch
              key={key}
              value={data}
              isChecked={radio === data}
              onChange={setRadio}
            />
            <Theme.Text>{data}</Theme.Text>
          </label>
        ))}
      </Styled.FiledList>
      <Styled.FiledList>
        <Styled.Legend>Checkbox</Styled.Legend>
        {CHECKBOX_LIST.map(({ data, key }) => (
          <label key={key}>
            <Radio
              key={key}
              value={data}
              isChecked={radio === data}
              onCheck={setRadio}
            />
            <Theme.Text>{data}</Theme.Text>
          </label>
        ))}
      </Styled.FiledList>
      <Styled.FiledList>
        <Styled.Legend>Switch (disabled)</Styled.Legend>
        {CHECKBOX_LIST.map(({ data, key }) => (
          <label key={key}>
            <Switch
              key={key}
              value={data}
              isChecked={false}
              onChange={setRadio}
              isDisabled
            />
            <Theme.Text>{data}</Theme.Text>
          </label>
        ))}
      </Styled.FiledList>
    </Styled.Wrapper>
  );
};

export default CheckboxPage;
