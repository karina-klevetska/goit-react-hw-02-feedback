import { Component } from 'react';
import Section from './components/Section/Section'
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  clickGoodFeedback = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1
    }))
  }

  clickNeutralFeedback = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1
    }))
  }

  clickBadFeedback = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1
    }))
  }

  totalFeedbackAmount = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  }

  positiveFeedbackPercentage = () => {
    const {totalFeedbackAmount} = this
    let positivePercentage = Math.floor((this.state.good * 100) / totalFeedbackAmount());
    return positivePercentage;
  }
  
  render() {
    const {
      clickGoodFeedback,
      clickNeutralFeedback,
      clickBadFeedback,
      totalFeedbackAmount,
      positiveFeedbackPercentage
    } = this

    const {good, neutral, bad} = this.state
    return (
      <div className="App">
        <Section title={'Please leave feedback'}>
        <FeedbackOptions
          clickGoodFeedback={clickGoodFeedback}
          clickNeutralFeedback={clickNeutralFeedback}
          clickBadFeedback={clickBadFeedback}
          />
          
          {totalFeedbackAmount() > 0 ?
            (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedbackAmount()}
                positivePercentage={positiveFeedbackPercentage()}
              />
            ) : (
              <Notification message={'No feedback given'}
              />
            )
          }   
        </Section>
      </div>
  );
  }
}

export default App;
