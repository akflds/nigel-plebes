import styles from "./Header.module.css";

const Header = ({ showSettings, setShowSettings }) => {
  // TODO: separate into components
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <h1>Nigel Plebes</h1>
      </div>
      <div className={styles.headerRight}>
        <button
          className={showSettings ? styles.clicked : ""}
          onClick={() => {
            setShowSettings((curr) => !curr);
          }}
        >
          Settings
        </button>
      </div>
    </header>
  );
};

export default Header;
