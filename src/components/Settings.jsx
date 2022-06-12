import { useState } from "react";
import styles from "./Settings.module.css";
const Settings = ({
  setPlaying,
  playing,
  easyMode,
  setEasyMode,
  fixedLetter,
  setFixedLetter,
}) => {
  const [isError, setIsError] = useState(false);

  const handleChange = (setState) => {
    if (playing) {
      setIsError(true);
      setTimeout(() => setIsError(false), 4000);
    } else {
      setState((curr) => !curr);
    }
  };

  const handleRestart = () => {
    setPlaying(false);
  };

  return (
    <div className={styles.settings}>
      <h2>Settings</h2>
      {isError ? (
        <p className={styles.error}>
          You can only change this at the start of a round.
        </p>
      ) : null}
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
        <p>Restart game</p>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
};

export default Settings;
