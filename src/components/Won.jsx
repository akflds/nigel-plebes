import styles from "./Won.module.css";
import getRandomWord from "../utils/getRandomWord";

const Won = ({ gameWord, setGameWord, setFoundWords, setPlaying, setWon }) => {
  const handleRestart = () => {
    setGameWord(getRandomWord());
    setFoundWords([]);
    setWon(false);
    setPlaying(false);
  };

  return (
    <div className={styles.won}>
      <p className={styles.congrats}>You're a winner, baby!</p>
      <div className={styles.gameWord}>
        <p>Your word was:</p>
        <p className={styles.word}>{gameWord.word}</p>
      </div>

      <button onClick={handleRestart}>Play again</button>
    </div>
  );
};

export default Won;
