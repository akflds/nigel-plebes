import { useState, useEffect } from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Settings from "./components/Settings";
import Gameboard from "./components/Gameboard";
import "./App.css";

import words from "./data/allWords.min";

function App() {
  // game state
  const [gameWord] = useState(
    localStorage.getItem("gameWord")
      ? JSON.parse(localStorage.getItem("gameWord"))
      : words[Math.floor(Math.random() * words.length)]
  );

  const [foundWords, setFoundWords] = useState(
    localStorage.getItem("foundWords")
      ? JSON.parse(localStorage.getItem("foundWords"))
      : []
  );
  const [playing, setPlaying] = useState(false);

  // game modes
  const [easyMode, setEasyMode] = useState(true);
  const [fixedLetter, setFixedLetter] = useState(false);

  // display states
  const [showStats, setShowStats] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    localStorage.setItem("gameWord", JSON.stringify(gameWord));
  }, [gameWord]);

  useEffect(() => {
    localStorage.setItem("foundWords", JSON.stringify(foundWords));
  }, [foundWords]);

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
          playing={playing}
          easyMode={easyMode}
          setEasyMode={setEasyMode}
          fixedLetter={fixedLetter}
          setFixedLetter={setFixedLetter}
        />
      ) : (
        <Gameboard
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
