import { useEffect, useState } from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Settings from "./components/Settings";
import Gameboard from "./components/Gameboard";
import "./App.css";
import words from "./data/allWords.min.js";

function App() {
  const getRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };

  // game state
  const [playing, setPlaying] = useState(
    localStorage.getItem("playing")
      ? JSON.parse(localStorage.getItem("playing"))
      : false
  );

  // game state and values
  const [gameWord, setGameWord] = useState(
    localStorage.getItem("gameWord")
      ? JSON.parse(localStorage.getItem("gameWord"))
      : getRandomWord()
  );

  const [foundWords, setFoundWords] = useState(
    localStorage.getItem("foundWords")
      ? JSON.parse(localStorage.getItem("foundWords"))
      : []
  );

  const [won, setWon] = useState(
    localStorage.getItem("won")
      ? JSON.parse(localStorage.getItem("won"))
      : false
  );

  // game modes
  // TODO: add to localstorage
  const [easyMode, setEasyMode] = useState(false);
  const [fixedLetter, setFixedLetter] = useState(false);

  // display states
  const [showStats, setShowStats] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useState(
    localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme"))
      : defaultDark
      ? "dark"
      : "light"
  );

  // store words and guesses in local storage
  useEffect(() => {
    localStorage.removeItem("gameWord");
    localStorage.setItem("gameWord", JSON.stringify(gameWord));
  }, [gameWord]);

  useEffect(() => {
    localStorage.removeItem("foundWords");
    localStorage.setItem("foundWords", JSON.stringify(foundWords));
  }, [foundWords]);

  useEffect(() => {
    localStorage.removeItem("playing");
    localStorage.setItem("playing", playing);
  }, [playing]);

  useEffect(() => {
    localStorage.removeItem("theme");
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    localStorage.removeItem("won");
    localStorage.setItem("won", won);
  }, [won]);

  return (
    <div className="App" data-theme={theme}>
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
          setGameWord={setGameWord}
          easyMode={easyMode}
          setEasyMode={setEasyMode}
          fixedLetter={fixedLetter}
          setFixedLetter={setFixedLetter}
          setFoundWords={setFoundWords}
          playing={playing}
          setPlaying={setPlaying}
          theme={theme}
          setTheme={setTheme}
          setWon={setWon}
        />
      ) : (
        <Gameboard
          setGameWord={setGameWord}
          gameWord={gameWord}
          foundWords={foundWords}
          setFoundWords={setFoundWords}
          easyMode={easyMode}
          fixedLetter={fixedLetter}
          playing={playing}
          setPlaying={setPlaying}
          won={won}
          setWon={setWon}
        />
      )}
    </div>
  );
}

export default App;
