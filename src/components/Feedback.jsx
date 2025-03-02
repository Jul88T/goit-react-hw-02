export default function Feedback({
  feedbackStats,
  totalFeedback,
  positiveFeedback,
}) {
  const calculatedPositiveFeedback =
    feedbackStats.good === 0 ? 0 : positiveFeedback;
  return (
    <div className="feedback">
      <ul>
        <li>Good: {feedbackStats.good}</li>
        <li>Neutral: {feedbackStats.neutral}</li>
        <li>Bad: {feedbackStats.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {calculatedPositiveFeedback}%</li>
      </ul>
    </div>
  );
}
