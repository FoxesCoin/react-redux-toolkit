import { Button } from 'components/button';
import { Picture } from 'components/picture';

import { RPage } from 'types/react';

import { Theme } from 'styles/theme';
import { ButtonThemeTest } from './components';

const click = () => console.log('Click!');

export const ButtonPage: RPage = () => (
  <div>
    <ButtonThemeTest />
    <Theme.Paragraph>Customized button</Theme.Paragraph>
    <Button styling="black" onClick={click}>
      <Picture src="arrowBottom" size={40} />{' '}
      <Theme.Text>Simple button</Theme.Text>
    </Button>
  </div>
);
