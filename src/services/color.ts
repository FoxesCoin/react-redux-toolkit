const parseHEXtoRGB = (color: string) => {
  if (!color.startsWith('#')) {
    throw new Error('Incorrect color format! This function support only HEX.');
  }
  const base = color.replace('#', '');
  let rgb: string[] = [];
  switch (true) {
    case base.length === 3:
    case base.length === 4: {
      rgb = Array.from(base).map((element) => element.repeat(2));
      break;
    }
    case base.length === 6:
    case base.length === 8: {
      rgb = Array.from(base.matchAll(/\w\w/g)).flat();
      break;
    }
    default:
      throw new Error(
        'HEX length incorrect please check color what you past in this function'
      );
  }

  return rgb.map((element) => parseInt(element, 16));
};

export const addAlphaToHEX = (hex: string, alpha: number) => {
  const rgb = parseHEXtoRGB(hex);
  const opacity = Math.max(0, Math.min(1, alpha));

  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
};
