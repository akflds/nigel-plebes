import styles from "./GameControls.module.css";
const GameControls = () => {
  return (
    <div className={styles.gameControls}>
      <button className={styles.gameControlButton} onClick={() => {}}>
        Delete
      </button>
      <button className={styles.gameControlButton} onClick={() => {}}>
        Shuffle
      </button>
      <button className={styles.gameControlButton} onClick={() => {}}>
        Enter
      </button>
    </div>
  );
};

export default GameControls;
