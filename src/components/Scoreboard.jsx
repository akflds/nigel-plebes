import Progress from "./Progress";
const Scoreboard = ({
  showProgress,
  setShowProgress,
  gameWord,
  foundWords,
}) => {
  return (
    <>
      <p>
        {foundWords.length} / {gameWord.subWords.length}
      </p>
      <button
        onClick={() => {
          setShowProgress(!showProgress);
        }}
      >
        Progress
      </button>
      {showProgress ? <Progress foundWords={foundWords} /> : null}
    </>
  );
};

export default Scoreboard;
