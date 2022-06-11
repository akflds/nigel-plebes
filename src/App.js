import { useState } from "react";
import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";
import Settings from "./components/Settings";
import Gameboard from "./components/Gameboard";
import "./App.css";

import words from "./data/allWords.min";

function App() {
  // game state
  const [gameWord] = useState(words[Math.floor(Math.random() * words.length)]);
  const [foundWords, setFoundWords] = useState([]);
  const [playing, setPlaying] = useState(false);

  // game modes
  const [easyMode, setEasyMode] = useState(true);
  const [fixedLetter, setFixedLetter] = useState(false);

  // display states
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="App">
      <Header
        showLeaderboard={showLeaderboard}
        showSettings={showSettings}
        setShowLeaderboard={setShowLeaderboard}
        setShowSettings={setShowSettings}
      />
      {showLeaderboard ? (
        <Leaderboard />
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
