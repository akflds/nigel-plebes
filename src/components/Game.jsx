import { useState } from "react";
import styles from "./Game.module.css";
import GameGuess from "./GameGuess";
import GameLetters from "./GameLetters";
import GameControls from "./GameControls";

const Game = ({ fixedLetter, gameWord, setFoundWords }) => {
  const [guess, setGuess] = useState([]);
  const [letters, setLetters] = useState(gameWord.word.split(""));

  return (
    <div className={styles.gameContainer}>
      <GameGuess guess={guess} />
      <GameLetters letters={letters} setGuess={setGuess} />
      <GameControls
        setGuess={setGuess}
        setLetters={setLetters}
        fixedLetter={fixedLetter}
      />
    </div>
  );
};

export default Game;
