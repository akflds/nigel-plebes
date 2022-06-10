import styles from "./Progress.module.css";

const Progress = ({ foundWords, easyMode }) => {
  const wordLengths = [
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ].reverse();

  return (
    <>
      <div className={styles.progress}>
        <h2>Progress</h2>
        <table className={styles.progessTable}>
          <thead>
            <tr>
              <th className={styles.progressTableCell}>Length</th>
              <th className={styles.progressTableCell}>Found</th>
              {easyMode ? (
                <th className={styles.progressTableCell}>Remaining</th>
              ) : null}
            </tr>
          </thead>

          <tbody>
            {wordLengths.map((len, i) => {
              return (
                <tr key={len}>
                  <td className={styles.progressTableCell}>{len}</td>
                  <td
                    className={`${styles.progressTableCell} ${styles.centerCell}`}
                  >
                    {foundWords.filter((word) => word.length === 9 - i).length}
                  </td>
                  {easyMode ? (
                    <td
                      className={`${styles.progressTableCell} ${styles.centerCell}`}
                    >
                      ?
                    </td>
                  ) : null}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={styles.words}>
        <h2>Your words</h2>
        <ul className={styles.wordlist}>
          {foundWords.map((word) => {
            return <li key={word}>{word}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Progress;
