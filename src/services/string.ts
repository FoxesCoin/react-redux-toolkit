const toSentenceCaseWord = (word: string) =>
  word[0].toUpperCase() + word.substring(1).toLowerCase();

export const toSentenceCase = (text: string): string => {
  const words = text.split(/ |-/);
  if (words.length === 1) {
    return toSentenceCaseWord(text);
  }
  return words.reduce((preview, item, index) => {
    if (index === 0) {
      return toSentenceCaseWord(item);
    }
    return preview + ' ' + toSentenceCaseWord(item);
  }, '');
};
