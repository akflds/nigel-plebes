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
          className={showProgress ? styles.clicked : null}
          onClick={() => {
            setShowProgress(!showProgress);
          }}
        >
          {showProgress ? "Hide score" : "Show score"}
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
