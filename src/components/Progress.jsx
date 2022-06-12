import styles from "./Progress.module.css";

const Progress = ({ gameWord, foundWords, easyMode }) => {
  const wordLengths = [
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ].reverse();

  // TODO: separate into components
  return (
    <>
      <div className={styles.progress}>
        <h2>Progress</h2>
        <table className={styles.progessTable}>
          <thead>
            <tr>
              <th className={styles.progressTableCell}>Length</th>
              <th className={styles.progressTableCell}>Found</th>
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
                    {`${
                      foundWords.filter((word) => word.length === 9 - i).length
                    } ${
                      easyMode
                        ? `/ ${
                            gameWord.subWords.filter(
                              (word) => word.length === 9 - i
                            ).length
                          }`
                        : ""
                    }`}
                  </td>
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
