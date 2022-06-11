import { useState } from "react";
import Scoreboard from "./Scoreboard";
import Game from "./Game";

const Gameboard = ({
  foundWords,
  setFoundWords,
  fixedLetter,
  gameWord,
  easyMode,
  setPlaying,
}) => {
  const [showProgress, setShowProgress] = useState(false);

  return (
    <>
      <Scoreboard
        easyMode={easyMode}
        gameWord={gameWord}
        foundWords={foundWords}
        showProgress={showProgress}
        setShowProgress={setShowProgress}
      />
      {showProgress ? null : (
        <Game
          setPlaying={setPlaying}
          fixedLetter={fixedLetter}
          gameWord={gameWord}
          foundWords={foundWords}
          setFoundWords={setFoundWords}
        />
      )}
    </>
  );
};

export default Gameboard;
