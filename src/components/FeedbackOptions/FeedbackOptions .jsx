export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(btn => (
    <button name={btn} key={btn} onClick={onLeaveFeedback}>
      {btn}
    </button>
  ));
};
