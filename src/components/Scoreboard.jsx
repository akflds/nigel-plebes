import styles from "./Scoreboard.module.css";

const Scoreboard = ({
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
          {showProgress ? "Hide words" : "Show words"}
        </button>
      </div>
    </>
  );
};

export default Scoreboard;
