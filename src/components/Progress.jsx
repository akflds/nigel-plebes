const Progress = ({ foundWords }) => {
  const wordLengths = ["Four", "Five", "Six", "Seven", "Eight", "Nine"];
  return (
    <div className="progress">
      <p>Progress:</p>
      <ul>
        {wordLengths.map((len, i) => {
          return (
            <li key={len}>
              <p>{len}</p>
              <p>{foundWords.filter((word) => word.length === i + 4).length}</p>
            </li>
          );
        })}
      </ul>
      <div className="progress-wordlist">
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
