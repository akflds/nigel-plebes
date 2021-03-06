import { useState } from "react";
import styles from "./Game.module.css";
import GameGuess from "./GameGuess";
import GameLetters from "./GameLetters";
import GameControls from "./GameControls";

const Game = ({
  letters,
  setLetters,
  fixedLetter,
  gameWord,
  foundWords,
  setFoundWords,
  setPlaying,
  setWon,
}) => {
  const [guess, setGuess] = useState([]);

  return (
    <div className={styles.gameContainer}>
      <GameGuess guess={guess} />
      <GameLetters
        guess={guess}
        letters={letters}
        setGuess={setGuess}
        setPlaying={setPlaying}
      />
      <GameControls
        gameWord={gameWord}
        foundWords={foundWords}
        setFoundWords={setFoundWords}
        guess={guess}
        setGuess={setGuess}
        setLetters={setLetters}
        fixedLetter={fixedLetter}
        setWon={setWon}
      />
    </div>
  );
};

export default Game;
