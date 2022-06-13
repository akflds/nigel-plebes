import { useState } from "react";
import styles from "./Settings.module.css";
import getRandomWord from "../utils/getRandomWord";

const Settings = ({
  easyMode,
  setEasyMode,
  fixedLetter,
  setFixedLetter,
  playing,
  setPlaying,
  theme,
  setTheme,
  setWon,
  gameWord,
  setGameWord,
  setFoundWords,
  setShowSettings,
}) => {
  const [confirm, setConfirm] = useState(false);
  const [lastWord, setLastWord] = useState("");
  const [success, setSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (setState) => {
    if (playing) {
      setErrorMessage("You can only change this at the start of a game.");
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
    } else {
      setState((curr) => !curr);
    }
  };

  const handleConfirm = () => {
    setConfirm(true);
    setTimeout(() => {
      setConfirm(false);
    }, 3000);
  };

  const handleRestart = () => {
    setLastWord(gameWord.word);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setShowSettings(false);
      setConfirm(false);
    }, 1500);
    setGameWord(getRandomWord());
    setFoundWords([]);
    setWon(false);
    setPlaying(false);
  };

  return (
    <div className={styles.settings}>
      <h2>Settings</h2>
      {isError ? <p className={styles.error}>{errorMessage}</p> : null}
      {success ? (
        <div className={styles.success}>
          <p>Ok, let's reset!</p>
          <p>The last word was:</p>
          <p className={styles.word}>{lastWord}</p>
        </div>
      ) : null}
      <div className={styles.setting}>
        <p>Easy mode</p>
        <label className={styles.switch}>
          <input
            disabled={success}
            className={styles.input}
            onChange={() => {
              handleChange(setEasyMode);
            }}
            type="checkbox"
            checked={easyMode}
          />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
      {/* <div className={styles.setting}>
        <p>Fixed letter</p>
        <label className={styles.switch}>
          <input
            disabled={success}
            className={styles.input}
            onChange={() => {
              handleChange(setFixedLetter);
            }}
            type="checkbox"
            checked={fixedLetter}
          />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div> */}
      <div className={styles.setting}>
        <p>Dark mode</p>
        <label className={styles.switch}>
          <input
            disabled={success}
            className={styles.input}
            onChange={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
            type="checkbox"
            checked={theme === "dark"}
          />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
      <div className={`${styles.setting}  ${confirm ? styles.confirm : ""}`}>
        <p>{confirm ? "Are you sure?" : "Restart game"}</p>
        <button
          disabled={success}
          className={`${styles.button}`}
          onClick={() => (confirm ? handleRestart() : handleConfirm())}
        >
          {confirm ? "Confirm" : "Restart"}
        </button>
      </div>
      {/* <div className={styles.setting}>
        <p>About</p>
        <button className={styles.button} onClick={() => {}}>
          Show
        </button>
      </div> */}
    </div>
  );
};

export default Settings;
