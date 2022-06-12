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
  setGameWord,
  setFoundWords,
}) => {
  const [success, setSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (setState) => {
    if (playing) {
      setErrorMessage("You can only change this at the start of a round.");
      setIsError(true);
      setTimeout(() => setIsError(false), 4000);
    } else {
      setState((curr) => !curr);
    }
  };

  const handleRestart = () => {
    console.log("settings restart");
    if (!playing) {
      setErrorMessage("Please play the game first!");
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
    } else {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      setGameWord(getRandomWord());
      setFoundWords([]);
      setWon(false);
      setPlaying(false);
    }
  };

  return (
    <div className={styles.settings}>
      <h2>Settings</h2>
      {isError ? <p className={styles.error}>{errorMessage}</p> : null}
      {success ? <p className={styles.success}>Ok, good luck!</p> : null}
      <div className={styles.setting}>
        <p>Easy mode</p>
        <label className={styles.switch}>
          <input
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
      <div className={styles.setting}>
        <p>Fixed letter</p>
        <label className={styles.switch}>
          <input
            className={styles.input}
            onChange={() => {
              handleChange(setFixedLetter);
            }}
            type="checkbox"
            checked={fixedLetter}
          />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
      <div className={styles.setting}>
        <p>Dark mode</p>
        <label className={styles.switch}>
          <input
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
      <div className={styles.setting}>
        <p>Restart game</p>
        <button
          className={styles.button}
          onClick={() => {
            handleRestart();
          }}
        >
          Restart
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
