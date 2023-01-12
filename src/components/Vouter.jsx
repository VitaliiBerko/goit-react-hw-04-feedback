import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedBackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistic } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const Vouter = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = event => {
    const { name } = event.target;

    setFeedback(prev => ({ ...prev, [name]: prev[name] + 1 }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    if (countTotalFeedback() > 0) {
      return Math.floor((good / countTotalFeedback()) * 100);
    }
  };

  const { good, neutral, bad } = feedback;
  return (
    <>
      <Section title="Please leave feedback">
        <FeedBackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      {!countTotalFeedback() ? (
        <Notification message="No feedback given" />
      ) : (
        <Section title="Statistics">
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </>
  );
};

