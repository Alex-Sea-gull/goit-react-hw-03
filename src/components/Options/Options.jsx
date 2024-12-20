import s from "./Options.module.css";

const Options = ({ setFeedback, totalFeedback, resetFeedback }) => {
  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  return (
    <div className={s.optionWrapper}>
      <button className={s.optionButton} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button
        className={s.optionButton}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={s.optionButton} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={s.optionButton} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
