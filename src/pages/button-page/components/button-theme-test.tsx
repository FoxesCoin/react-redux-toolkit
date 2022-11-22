import { useCallback, useState } from 'react';

import { Button } from 'components/button';
import { ButtonTheme, BUTTON_THEME } from 'components/button/button.constants';
import { Selector } from 'components/selector';

import { getObjectKeys } from 'services/object';
import { toSentenceCase } from 'services/string';

import { RPage } from 'typings/react';

import { Theme } from 'styles/theme';

const THEME = getObjectKeys(BUTTON_THEME);

export const ButtonThemeTest: RPage = () => {
  const [theme, setTheme] = useState<ButtonTheme>('white');
  const selectTheme = useCallback((item: string) => theme === item, [theme]);
  const handleClick = () => {
    return;
  };

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
          {THEME.map((item) => (
            <Selector.Item value={item} key={item}>
              {toSentenceCase(item)}
            </Selector.Item>
          ))}
        </Selector.Menu>
      </Selector>
      <fieldset>
        <legend>{toSentenceCase(theme)}</legend>
        <Button styling={theme} onClick={handleClick}>
          Simple button
        </Button>
        <Button styling={theme} onClick={handleClick} isDisabled>
          Disabled button
        </Button>
      </fieldset>
    </>
  );
};
