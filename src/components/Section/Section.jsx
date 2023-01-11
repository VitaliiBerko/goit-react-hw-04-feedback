import PropTypes from 'prop-types';
import s from 'components/Section/section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={s.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
