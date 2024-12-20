import s from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, pozitive }) => {
  return (
    <div className={s.feedbackWrapper}>
      <p className={s.feedbackResults}>Good: {good}</p>
      <p className={s.feedbackResults}>Neutral: {neutral}</p>
      <p className={s.feedbackResults}>Bad: {bad}</p>
      <p className={s.feedbackResults}>Pozitive: {pozitive}%</p>
    </div>
  );
};

export default Feedback;
