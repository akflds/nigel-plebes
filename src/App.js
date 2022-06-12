import { useState, useEffect } from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Settings from "./components/Settings";
import Gameboard from "./components/Gameboard";
import "./App.css";

import words from "./data/allWords.min";

function App() {
  // game state
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
  const [playing, setPlaying] = useState(
    localStorage.getItem("playing")
      ? JSON.parse(localStorage.getItem("playing"))
      : false
  );

  const [won, setWon] = useState(false);

  // game modes
  const [easyMode, setEasyMode] = useState(true);
  const [fixedLetter, setFixedLetter] = useState(false);

  // display states
  const [showStats, setShowStats] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

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

  return (
    <div className="App">
      <Header
        showStats={showStats}
        showSettings={showSettings}
        setShowStats={setShowStats}
        setShowSettings={setShowSettings}
      />
      {showStats ? (
        <Stats />
      ) : showSettings ? (
        <Settings
          setPlaying={setPlaying}
          playing={playing}
          easyMode={easyMode}
          setEasyMode={setEasyMode}
          fixedLetter={fixedLetter}
          setFixedLetter={setFixedLetter}
        />
      ) : (
        <Gameboard
          won={won}
          setWon={setWon}
          setPlaying={setPlaying}
          foundWords={foundWords}
          setFoundWords={setFoundWords}
          fixedLetter={fixedLetter}
          gameWord={gameWord}
          easyMode={easyMode}
        />
      )}
    </div>
  );
}

export default App;
