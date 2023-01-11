import PropTypes from 'prop-types';
import s from 'components/Statistics/statistics.module.css';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p>
        Good:<span className={s.value}>{good}</span>
      </p>
      <p>
        Neutral:<span className={s.value}>{neutral}</span>
      </p>
      <p>
        Bad:<span className={s.value}>{bad}</span>
      </p>
      <p>
        Total:<span className={s.value}>{total}</span>
      </p>
      <p>
        Positive feedback:<span className={s.value}>{positivePercentage}%</span>
      </p>
    </>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
