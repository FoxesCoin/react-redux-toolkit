import { useCallback, useState } from 'react';

import { Button } from 'components/button';
import { ButtonTheme } from 'components/button/button.constants';
import { Selector } from 'components/selector';

import { toSentenceCase } from 'services/string';

import { RPage } from 'types/react';

import { Theme } from 'styles/theme';

const BUTTON_THEME: ButtonTheme[] = ['black', 'white'];
const click = () => console.log('Click!');

export const ButtonThemeTest: RPage = () => {
  const [theme, setTheme] = useState<ButtonTheme>('white');
  const selectTheme = useCallback((item: string) => theme === item, [theme]);
  return (
    <>
      <Theme.Text>Choose theme:</Theme.Text>
      <Selector
        styling={'dark-orange'}
        checkEqual={selectTheme}
        setValue={setTheme}
        value={theme}
      >
        <Selector.Header>{toSentenceCase(theme)}</Selector.Header>
        <Selector.Menu>
          {BUTTON_THEME.map((item) => (
            <Selector.Item value={item} key={item}>
              {toSentenceCase(item)}
            </Selector.Item>
          ))}
        </Selector.Menu>
      </Selector>
      <fieldset>
        <legend>{toSentenceCase(theme)}</legend>
        <Button styling={theme} onClick={click}>
          Simple button
        </Button>
        <Button styling={theme} onClick={click} isDisabled>
          Disabled button
        </Button>
      </fieldset>
    </>
  );
};
