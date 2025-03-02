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

  const totalFeedback =
    feedbackStats.good + feedbackStats.neutral + feedbackStats.bad;

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedbackStats={feedbackStats} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
