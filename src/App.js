import { useState } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
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
        <p>Leaderboard</p>
      ) : showSettings ? (
        <p>Settings</p>
      ) : (
        <p>Game</p>
      )}
    </div>
  );
}

export default App;
