import { useState } from "react";
import Scoreboard from "./Scoreboard";
import LetterGrid from "./LetterGrid";

const Gameboard = ({ gameWord }) => {
  const [foundWords, setFoundWords] = useState([]);
  const [showProgress, setShowProgress] = useState(false);

  return (
    <>
      <Scoreboard
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
