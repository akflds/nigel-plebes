import styles from "./Settings.module.css";
const Settings = ({ easyMode, setEasyMode }) => {
  return (
    <div className={styles.settings}>
      <h2>Settings</h2>
      <div className={styles.setting}>
        <p>Easy mode</p>
        <label className={styles.switch}>
          <input
            className={styles.input}
            onChange={() => setEasyMode((curr) => !curr)}
            type="checkbox"
            checked={easyMode}
          />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
    </div>
  );
};

export default Settings;
