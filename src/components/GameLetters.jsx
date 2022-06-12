import { useEffect, useState } from "react";
import styles from "./GameLetters.module.css";

const GameLetters = ({ letters, guess, setGuess, setPlaying }) => {
  const [buttonStatus, setButtonStatus] = useState([]);

  useEffect(() => {
    if (guess.length === 0) {
      setButtonStatus([]);
    }
  }, [guess]);

  const handleClick = (letter) => {
    setGuess((curr) => {
      return curr.length < 9 ? [...curr, letter] : [...curr];
    });
    setPlaying(true);
  };

  return (
    <div className={styles.letterGrid}>
      {letters.map((letter, index) => {
        return (
          <button
            key={index}
            disabled={buttonStatus[index]}
            onClick={(e) => {
              setButtonStatus((curr) => {
                curr[index] = true;
                return curr;
              });
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
