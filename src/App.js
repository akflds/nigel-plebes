import { useEffect, useState } from "react";
import Header from "./components/Header";
import Settings from "./components/Settings";
import Gameboard from "./components/Gameboard";
import "./App.css";
import words from "./data/allWords.min.js";
import shuffle from "./utils/shuffle";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const getRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };

  const [easyMode, setEasyMode] = useState(false);
  const [fixedLetter, setFixedLetter] = useState(false);

  const [playing, setPlaying] = useLocalStorage("playing", false);
  const [gameWord, setGameWord] = useLocalStorage("gameWord", getRandomWord());
  const [foundWords, setFoundWords] = useLocalStorage("foundWords", []);
  const [won, setWon] = useLocalStorage("won", false);

  const [letters, setLetters] = useState(
    shuffle(gameWord.word.split(""), fixedLetter)
  );

  // display states
  const [showSettings, setShowSettings] = useState(false);
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  useEffect(() => {
    setLetters(shuffle(gameWord.word.split(""), fixedLetter));
  }, [gameWord, fixedLetter]);

  return (
    <div className="App" data-theme={theme}>
      <Header showSettings={showSettings} setShowSettings={setShowSettings} />
      {showSettings ? (
        <Settings
          setGameWord={setGameWord}
          easyMode={easyMode}
          setEasyMode={setEasyMode}
          fixedLetter={fixedLetter}
          setFixedLetter={setFixedLetter}
          setFoundWords={setFoundWords}
          playing={playing}
          gameWord={gameWord}
          setPlaying={setPlaying}
          theme={theme}
          setTheme={setTheme}
          setWon={setWon}
          setShowSettings={setShowSettings}
        />
      ) : (
        <Gameboard
          letters={letters}
          setLetters={setLetters}
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
