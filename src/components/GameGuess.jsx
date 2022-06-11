import styles from "./GameGuess.module.css";

const GameGuess = ({ guess, validGuess }) => {
  return (
    <p
      className={`${styles.guess} ${guess.length < 9 ? styles.blinky : ""} ${
        validGuess ? "" : styles.badGuess
      }`}
    >
      {guess.length ? (guess.length < 9 ? guess : guess) : ""}
    </p>
  );
};

export default GameGuess;
