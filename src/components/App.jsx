import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    const name = e.target.name;
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        console.log('defalt cace');
    }
  };

  const total = good + neutral + bad;

  const positivePercentage = () => {
    const oneProcent = 100 / total;

    const prcent = Math.round(oneProcent * good);

    return `${prcent}%`;
  };
  const options = [
    {
      name: 'good',
      type: 'button',
      value: 'Good',
    },
    {
      name: 'neutral',
      type: 'button',
      value: 'Neutral',
    },
    {
      name: 'bad',
      type: 'button',
      value: 'Bad',
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Section title={'Please leave feedback'}>
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={options} />
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
export default App;
