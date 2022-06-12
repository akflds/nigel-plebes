import { useState } from "react";
import Scoreboard from "./Scoreboard";
import Game from "./Game";
import Progress from "./Progress";
import Won from "./Won";

const Gameboard = ({
  won,
  setWon,
  foundWords,
  setFoundWords,
  fixedLetter,
  gameWord,
  easyMode,
  setPlaying,
}) => {
  const [showProgress, setShowProgress] = useState(false);

  if (won) return <Won gameWord={gameWord} />;
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
