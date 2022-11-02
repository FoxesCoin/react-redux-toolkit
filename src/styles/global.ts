import { createGlobalStyle } from 'styled-components';

import { COLORS } from './color';
import { FONTS, importFont } from './font';
import { FONT_SIZES } from './font-size';

export const GlobalStyles = createGlobalStyle`
html {
  color: ${COLORS.black};
  font-size: ${FONT_SIZES.regular};
  font-family: ${FONTS.regular};
}

body.modal-open {
  overflow: hidden;
}

body,
html,
#root {
  height: 100vh;
  width: 100%;
}

#root {
  display: grid;
}

*, ::before, ::after {
  box-sizing: border-box;  
  min-width: 0;
  min-height: 0;
}

* { 
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
}

${Object.values(FONTS).map((font) => importFont(font))}
`;
