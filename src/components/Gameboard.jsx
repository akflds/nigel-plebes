import { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";
import Game from "./Game";
import Progress from "./Progress";
import Won from "./Won";
import words from "../data/allWords.min.js";

const Gameboard = ({ fixedLetter, easyMode, playing, setPlaying }) => {
  const [won, setWon] = useState(false);

  const [gameWord, setGameWord] = useState(
    localStorage.getItem("gameWord")
      ? JSON.parse(localStorage.getItem("gameWord"))
      : words[Math.floor(Math.random() * words.length)]
  );

  const [foundWords, setFoundWords] = useState(
    localStorage.getItem("foundWords")
      ? JSON.parse(localStorage.getItem("foundWords"))
      : []
  );

  const [showProgress, setShowProgress] = useState(false);

  // store words and guesses in local storage
  useEffect(() => {
    localStorage.removeItem("gameWord");
    localStorage.setItem("gameWord", JSON.stringify(gameWord));
  }, [gameWord]);

  useEffect(() => {
    localStorage.removeItem("foundWords");
    localStorage.setItem("foundWords", JSON.stringify(foundWords));
  }, [foundWords]);

  // reset game
  useEffect(() => {
    localStorage.setItem("playing", playing);
    if (playing === false) {
      setGameWord(words[Math.floor(Math.random() * words.length)]);
      setFoundWords([]);
    }
  }, [playing]);

  if (won)
    return <Won gameWord={gameWord} setWon={setWon} setPlaying={setPlaying} />;
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
