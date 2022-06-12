import words from "../data/allWords.min.js";

const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

export default getRandomWord;
