import styles from "./GameLetters.module.css";

const GameLetters = ({ letters, setGuess }) => {
  const handleClick = (letter) => {
    setGuess((curr) => {
      return curr.length < 9 ? [...curr, letter] : [...curr];
    });
  };

  return (
    <div className={styles.letterGrid}>
      {letters.map((letter, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              handleClick(letter);
            }}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default GameLetters;
