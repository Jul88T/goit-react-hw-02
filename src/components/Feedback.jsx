export default function Feedback({ feedbackStats }) {
  return (
    <div className="feedback">
      <ul>
        <li>Good: {feedbackStats.good}</li>
        <li>Neutral: {feedbackStats.neutral}</li>
        <li>Bad: {feedbackStats.bad}</li>
      </ul>
    </div>
  );
}
