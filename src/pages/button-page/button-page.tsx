import { Button } from 'components/button';
import { Picture } from 'components/picture';

import { RPage } from 'typings/react';

import { Theme } from 'styles/theme';
import { ButtonThemeTest } from './components';

const ButtonPage: RPage = () => {
  const handleClick = () => {
    return;
  };

  return (
    <div>
      <ButtonThemeTest />
      <Theme.Paragraph>Customized button</Theme.Paragraph>
      <Button styling="black" onClick={handleClick}>
        <Picture src="arrowBottom" size={40} />{' '}
        <Theme.Text>Simple button</Theme.Text>
      </Button>
    </div>
  );
};

export default ButtonPage;
