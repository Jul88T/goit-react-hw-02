import "./App.css";
import Description from "./components/Description.jsx";
import { useState } from "react";
import Options from "./components/Options.jsx";
import Feedback from "./components/Feedback.jsx";
import Notification from "./components/Notification.jsx";

function App() {
  const [feedbackStats, setFeedbackStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = (feedbackType) => {
    setFeedbackStats((prevStats) => ({
      ...prevStats,
      [feedbackType]: prevStats[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbackStats({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback =
    feedbackStats.good + feedbackStats.neutral + feedbackStats.bad;
  const positiveFeedback =
    totalFeedback === 0
      ? 0
      : Math.round(
          (feedbackStats.good / (feedbackStats.good + feedbackStats.bad)) * 100
        );

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackStats={feedbackStats}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
