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
          {`Found: ${Math.round(
            (foundWords.length / gameWord.subWords.length) * 100
          )}%`}
        </p>
        <button
          className={showProgress ? styles.clicked : null}
          onClick={() => {
            setShowProgress(!showProgress);
          }}
        >
          Your words
        </button>
      </div>

      {showProgress ? (
        <Progress
          gameWord={gameWord}
          easyMode={easyMode}
          foundWords={foundWords}
        />
      ) : null}
    </>
  );
};

export default Scoreboard;
