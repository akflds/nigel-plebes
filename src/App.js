import { useState } from "react";
import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";
import Settings from "./components/Settings";
import Gameboard from "./components/Gameboard";
import "./App.css";
import words from "./data/word"; //hardcoded for now

function App() {
  // game state
  const [gameWord] = useState(words[0]); // hardcoded with "sacrifice" for now

  // display states
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [easyMode, setEasyMode] = useState(true);

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
        <Settings easyMode={easyMode} setEasyMode={setEasyMode} />
      ) : (
        <Gameboard gameWord={gameWord} easyMode={easyMode} />
      )}
    </div>
  );
}

export default App;
