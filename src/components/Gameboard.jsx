import { useState } from "react";
import Scoreboard from "./Scoreboard";
import LetterGrid from "./LetterGrid";

const Gameboard = ({ gameWord, easyMode }) => {
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
        <LetterGrid gameWord={gameWord} setFoundWords={setFoundWords} />
      )}
    </>
  );
};

export default Gameboard;
