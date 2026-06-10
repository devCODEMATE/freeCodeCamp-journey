function isPalindrome(word) {
  const lower = word.toLowerCase();
  const reversed = lower.split("").reverse().join("");
  return lower === reversed;
}

function findPalindromeBreaks(words) {
  const breaks = [];
  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breaks.push(i);
    }
  }
  return breaks;
}

function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length) return [];

  const occurrences = {};

  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ").toLowerCase();
    if (!occurrences[phrase]) occurrences[phrase] = [];
    occurrences[phrase].push(i);
  }

  const result = [];
  for (const phrase in occurrences) {
    if (occurrences[phrase].length > 1) {
      result.push(...occurrences[phrase]);
    }
  }

  result.sort((a, b) => a - b);
  return result;
}

function analyzeTexts(texts, phraseLength) {
  if (texts.length === 0) return [];

  const analysis = [];

  for (let i = 0; i < texts.length; i++) {
    const words = texts[i];
    analysis.push({
      repeatedPhrases: findRepeatedPhrases(words, phraseLength),
      palindromeBreaks: findPalindromeBreaks(words),
    });
  }

  return analysis;
}
