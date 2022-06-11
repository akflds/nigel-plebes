import { useState } from "react";
import Scoreboard from "./Scoreboard";
import Game from "./Game";

const Gameboard = ({ fixedLetter, gameWord, easyMode }) => {
  // for testing
  const [foundWords, setFoundWords] = useState([
    "case",
    "cars",
    "care",
    "cafe",
    "ceca",
    "race",
    "rise",
    "rice",
    "ears",
    "eras",
    "safer",
    "cares",
    "cafes",
    "cries",
    "fares",
    "fairs",
    "fries",
    "fires",
    "fears",
    "scarce",
    "farces",
    "fairies",
    "sacrifice",
  ]);
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
          fixedLetter={fixedLetter}
          gameWord={gameWord}
          setFoundWords={setFoundWords}
        />
      )}
    </>
  );
};

export default Gameboard;
