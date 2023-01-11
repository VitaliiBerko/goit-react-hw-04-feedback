import PropTypes from 'prop-types';
import s from 'components/FeedbackOptions/feedbackOptions.module.css';

export const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option) => (
        <button
          key={option}
          onClick={onLeaveFeedback}
          name={option}
          type="button"
          className={s.feedbackBtn}
        >
          {option}
        </button>
      ))}
    </>
  );
};

FeedBackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
