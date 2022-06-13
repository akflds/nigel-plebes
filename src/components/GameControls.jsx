import { useState } from "react";
import shuffle from "../utils/shuffle";
import styles from "./GameControls.module.css";
const GameControls = ({
  guess,
  setGuess,
  foundWords,
  setFoundWords,
  gameWord,
  setWon,
  setLetters,
  fixedLetter,
}) => {
  const [notFound, setNotFound] = useState("");

  const validateGuess = () => {
    if (
      gameWord.subWords.includes(guess.join("")) &&
      !foundWords.includes(guess.join(""))
    ) {
      setFoundWords((curr) => [...curr, guess.join("")]);
      if (guess.join("") === gameWord.word) {
        setWon(true);
      }
      setGuess([]);
    } else {
      if (foundWords.includes(guess.join(""))) {
        setNotFound("Already found!");
      } else {
        setNotFound("Sorry, I don't know that word :(");
      }
      setTimeout(() => {
        setNotFound("");
        setGuess([]);
      }, 1000);
    }
  };

  return (
    <>
      {notFound === "" ? null : <p className={styles.notFound}>{notFound}</p>}
      <div className={styles.gameControls}>
        <button
          disabled={notFound !== ""}
          onClick={() => {
            setGuess([]);
          }}
        >
          Clear
        </button>
        <button
          disabled={notFound !== ""}
          onClick={() => {
            setLetters(shuffle(gameWord.word.split(""), fixedLetter));
            setGuess([]);
          }}
        >
          Shuffle
        </button>
        <button disabled={notFound !== ""} onClick={validateGuess}>
          Enter
        </button>
      </div>
    </>
  );
};

export default GameControls;
