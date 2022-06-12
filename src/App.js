import { useState } from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Settings from "./components/Settings";
import Gameboard from "./components/Gameboard";
import "./App.css";

function App() {
  // game state
  const [playing, setPlaying] = useState(
    localStorage.getItem("playing")
      ? JSON.parse(localStorage.getItem("playing"))
      : false
  );

  // game modes
  // TODO: add to localstorage
  const [easyMode, setEasyMode] = useState(false);
  const [fixedLetter, setFixedLetter] = useState(false);

  // display states
  const [showStats, setShowStats] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="App">
      <Header
        showStats={showStats}
        setShowStats={setShowStats}
        showSettings={showSettings}
        setShowSettings={setShowSettings}
      />
      {showStats ? (
        <Stats />
      ) : showSettings ? (
        <Settings
          easyMode={easyMode}
          setEasyMode={setEasyMode}
          fixedLetter={fixedLetter}
          setFixedLetter={setFixedLetter}
          playing={playing}
          setPlaying={setPlaying}
        />
      ) : (
        <Gameboard
          easyMode={easyMode}
          fixedLetter={fixedLetter}
          playing={playing}
          setPlaying={setPlaying}
        />
      )}
    </div>
  );
}

export default App;
