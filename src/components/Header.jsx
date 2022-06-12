import styles from "./Header.module.css";

const Header = ({ showStats, setShowStats, showSettings, setShowSettings }) => {
  // TODO: separate into components
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <h1>Nigel Plebes</h1>
      </div>
      <div className={styles.headerRight}>
        <button
          className={showStats ? styles.clicked : ""}
          onClick={() => {
            setShowStats((curr) => !curr);
            setShowSettings(false);
          }}
        >
          Stats
        </button>
        <button
          className={showSettings ? styles.clicked : ""}
          onClick={() => {
            setShowSettings((curr) => !curr);
            setShowStats(false);
          }}
        >
          Settings
        </button>
      </div>
    </header>
  );
};

export default Header;
