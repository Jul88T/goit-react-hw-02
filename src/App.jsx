import "./App.css";
import Description from "./components/Description.jsx";
import { useState, useEffect } from "react";
import Options from "./components/Options.jsx";
import Feedback from "./components/Feedback.jsx";
import Notification from "./components/Notification.jsx";

function App() {
  const loadFeedbackStats = () => {
    const savedStats = localStorage.getItem("feedbackStats");
    return savedStats
      ? JSON.parse(savedStats)
      : { good: 0, neutral: 0, bad: 0 };
  };

  const [feedbackStats, setFeedbackStats] = useState(loadFeedbackStats);

  useEffect(() => {
    localStorage.setItem("feedbackStats", JSON.stringify(feedbackStats));
  }, [feedbackStats]);

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
      : Math.round((feedbackStats.good / totalFeedback) * 100);

  return (
    <div className="app">
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
    </div>
  );
}

export default App;
