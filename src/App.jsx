import { useState, useEffect } from "react";
import Description from "./components/Descriptions/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  // const [feedback, setFeedback] = useState(() => {
  //   const savedFeedback = JSON.parse(localStorage.getItem("feedback"));
  // if (savedFeedback && savedFeedback.length) {
  //     return savedFeedback
  // }
  // return []}) не працює якщо savedFeedback об'єкт

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    console.log("Сюди приходять дані із localStorage:", savedFeedback);
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
    // if (savedFeedback) {
    //   return JSON.parse(savedFeedback);
    // } else {
    //   return { good: 0, neutral: 0, bad: 0 };
    // }
  });

  useEffect(() => {
    if (feedback) {
      localStorage.setItem("feedback", JSON.stringify(feedback));
    }
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className="wrapper">
      <Description />
      <Options
        feedback={feedback}
        setFeedback={setFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          pozitive={positiveFeedback}
        />
      )}
    </div>
  );
}

export default App;
