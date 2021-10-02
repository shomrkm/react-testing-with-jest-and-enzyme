const languageStrings: any = {
  en: {
    congrats: 'Congratulations! You guessed the word!',
    submit: 'Submit',
    guessPrompt: 'Try to guess the secret word!',
    guessInputPlaceholder: 'enter gueess',
    guessColumnHeader: 'Guessed Word',
    guessedWord: 'Guesses',
    matchingLettersColumnHeader: 'Matching Letters',
  },
  emoji: {
    congrats: '🎯🎉',
    submit: '🚀',
    guessPrompt: '🤔🤫🔤',
    guessInputPlaceholder: '⌨️🤔',
    guessedWords: '🤷‍🔤',
    guessColumnHeader: '🤷‍',
    matchingLettersColumnHeader: '✅',
  },
};

export function getStringByLanguage(
  languageCode: string,
  stringKey: string,
  strings = languageStrings
) {
  if (
    !languageStrings[languageCode] ||
    !languageStrings[languageCode][stringKey]
  ) {
    console.warn(`Could not get [${stringKey}] for [${languageCode}]`);
    // fall back to english
    return strings.en[stringKey];
  }

  return strings[languageCode][stringKey];
}
