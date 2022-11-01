export const COLORS = <const>{
  transparent: 'transparent',

  white: '#fff',
  cultured: '#fcfafa',

  black: '#282828',

  onyx: '#3b3c3c',
  onyxOpacity: 'rgba(59, 59, 60, 0.7)',

  lightGray: '#c8d3d5',
  spanishGray: '#999',
  dimGray: '#656C6E',

  palePink: '#ffd6d6',
  lightCoral: '#ff8585',
  red: '#f00',

  paleGreen: '#d6ffd6',
  lightGreen: '#85ff85',
  green: '#0f0',
  darkGreen: '#090',

  paleBlue: '#d6d6ff',
  lightBlue: '#8585ff',
  blue: '#00f',

  steelTeal: '#6e8387',

  starCommandBlue: '#1378ab',
  sapphireBlue: '#116a96',
  charcoal: '#214354',

  darkBlue: '#23238e',

  backgroundBlue: '#030111',

  paleYellow: '#fff992',
  yellow: '#ffe600',

  lightOrange: '#ffac8c',
  orange: '#ff7a47',
  orangeOpacity: 'rgba(255, 122, 71, 0.5)',
};

export type Color = keyof typeof COLORS;
