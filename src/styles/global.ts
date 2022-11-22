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

body,
html,
#root {
  height: 100vh;
  width: 100%;
}

#root {
  display: grid;
}

#modal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 5;


  &:empty {
    display: none;
  }

  &:not(:empty) ~ #root {
    overflow: hidden;
  }
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

input, button {
  cursor: pointer;
}

input:disabled, 
button:disabled {
  cursor: no-drop;
}

// Connected to input element inside label will have specific styles
label > input {
  &  ~ * {
    cursor: pointer;
  }
  
  // When input disabled
  &:disabled  ~ * {
    cursor: no-drop;
  }
}

// Add additional cursor parameter identical to input
label:has(input:disabled) {
  cursor: no-drop;
}

${Object.values(FONTS).map((font) => importFont(font))}
`;
