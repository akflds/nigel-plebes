import styles from "./Progress.module.css";

const Progress = ({ foundWords }) => {
  const wordLengths = ["Four", "Five", "Six", "Seven", "Eight", "Nine"];
  //TODO: refactor to display as a table
  return (
    <div className={styles.progress}>
      <p>Progress:</p>
      <ul>
        <li>
          <p>Word length</p>
          <p>Count</p>
        </li>
        {wordLengths.map((len, i) => {
          return (
            <li key={len}>
              <p>{len}</p>
              <p>{foundWords.filter((word) => word.length === i + 4).length}</p>
            </li>
          );
        })}
      </ul>
      <div className={styles.foundWords}>
        <p>Words:</p>
        <ul>
          {foundWords.map((word) => {
            return <li key={word}>{word}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Progress;
