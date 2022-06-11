import { useState } from "react";
import styles from "./Game.module.css";
import GameGuess from "./GameGuess";
import GameLetters from "./GameLetters";
import GameControls from "./GameControls";

const Game = ({
  fixedLetter,
  gameWord,
  foundWords,
  setFoundWords,
  setPlaying,
}) => {
  const [guess, setGuess] = useState([]);
  const [letters, setLetters] = useState(gameWord.word.split(""));

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
      />
    </div>
  );
};

export default Game;
