import styles from "./GameControls.module.css";
const GameControls = ({
  guess,
  setGuess,
  foundWords,
  setFoundWords,
  gameWord,
  setWon,
}) => {
  return (
    <div className={styles.gameControls}>
      <button
        onClick={() => {
          setGuess([]);
        }}
      >
        Clear
      </button>
      <button disabled onClick={() => {}}>
        Shuffle
      </button>
      <button
        onClick={() => {
          if (
            gameWord.subWords.includes(guess.join("")) &&
            !foundWords.includes(guess.join(""))
          ) {
            setFoundWords((curr) => [...curr, guess.join("")]);
            if (guess.join("") === gameWord.word) {
              setWon(true);
            }
            setGuess([]);
          }
        }}
      >
        Enter
      </button>
    </div>
  );
};

export default GameControls;
