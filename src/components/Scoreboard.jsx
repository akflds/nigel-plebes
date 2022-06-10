import styles from "./Scoreboard.module.css";

import Progress from "./Progress";

const Scoreboard = ({
  easyMode,
  showProgress,
  setShowProgress,
  gameWord,
  foundWords,
}) => {
  return (
    <>
      <div className={styles.scoreboardContainer}>
        <p id={styles.score}>
          {foundWords.length} / {gameWord.subWords.length}
        </p>
        <button
          className={showProgress ? styles.up : styles.down}
          onClick={() => {
            setShowProgress(!showProgress);
          }}
        ></button>
      </div>

      {showProgress ? (
        <Progress easyMode={easyMode} foundWords={foundWords} />
      ) : null}
    </>
  );
};

export default Scoreboard;
