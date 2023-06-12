import {Component} from "react"
import { Statistics }from './Statistics/Statistics.jsx'
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

 onClickFeedback = type =>
    this.setState(prev => ({
      [type]: prev[type] + 1,
    }));

  countTotalFeedback = () => {
  const {good, neutral, bad} = this.state;
  return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };



  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onClickFeedback}
          />
        </Section>
        <Section title = "Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good = {this.state.good}
              neutral = {this.state.neutral}
              bad = {this.state.bad}
              total = {this.countTotalFeedback()}
              positivePercentage = {this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message = "There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
export default App;
