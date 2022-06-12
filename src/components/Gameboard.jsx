import { useState } from "react";
import Scoreboard from "./Scoreboard";
import Game from "./Game";
import Progress from "./Progress";
import Won from "./Won";

const Gameboard = ({
  letters,
  setLetters,
  fixedLetter,
  easyMode,
  setPlaying,
  foundWords,
  setFoundWords,
  gameWord,
  setGameWord,
  won,
  setWon,
}) => {
  const [showProgress, setShowProgress] = useState(false);

  // display congrats if won
  if (won)
    return (
      <Won
        gameWord={gameWord}
        setGameWord={setGameWord}
        setFoundWords={setFoundWords}
        setPlaying={setPlaying}
        setWon={setWon}
      />
    );

  return (
    <>
      <Scoreboard
        easyMode={easyMode}
        gameWord={gameWord}
        foundWords={foundWords}
        showProgress={showProgress}
        setShowProgress={setShowProgress}
      />
      {showProgress ? (
        <Progress
          gameWord={gameWord}
          easyMode={easyMode}
          foundWords={foundWords}
        />
      ) : (
        <Game
          letters={letters}
          setLetters={setLetters}
          setPlaying={setPlaying}
          fixedLetter={fixedLetter}
          gameWord={gameWord}
          foundWords={foundWords}
          setFoundWords={setFoundWords}
          setWon={setWon}
        />
      )}
    </>
  );
};

export default Gameboard;
