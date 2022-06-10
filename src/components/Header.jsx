import styles from "./Header.module.css";

const Header = ({
  showLeaderboard,
  setShowLeaderboard,
  showSettings,
  setShowSettings,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <h1>GANARAM</h1>
      </div>
      <div className={styles.headerRight}>
        <button
          className={showLeaderboard ? styles.clicked : ""}
          onClick={() => {
            setShowLeaderboard((curr) => !curr);
            setShowSettings(false);
          }}
        >
          Leaderboard
        </button>
        <button
          className={showSettings ? styles.clicked : ""}
          onClick={() => {
            setShowSettings((curr) => !curr);
            setShowLeaderboard(false);
          }}
        >
          Settings
        </button>
      </div>
    </header>
  );
};

export default Header;
