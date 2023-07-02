// import {Component} from "react"
// import { Statistics }from './Statistics/Statistics.jsx'
// import { Section } from 'components/Section/Section';
// import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
// import { Notification } from 'components/Notification/Notification';

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }

//  onClickFeedback = type =>
//     this.setState(prev => ({
//       [type]: prev[type] + 1,
//     }));

//   countTotalFeedback = () => {
//   const {good, neutral, bad} = this.state;
//   return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     return Math.round((good / this.countTotalFeedback()) * 100);
//   };



//   render() {
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onClickFeedback}
//           />
//         </Section>
//         <Section title = "Statistics">
//           {this.countTotalFeedback() ? (
//             <Statistics
//               good = {this.state.good}
//               neutral = {this.state.neutral}
//               bad = {this.state.bad}
//               total = {this.countTotalFeedback()}
//               positivePercentage = {this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message = "There is no feedback" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }

// // export const App = () => {
// //   return (
// //     <div
// //       style={{
// //         height: '100vh',
// //         display: 'flex',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         fontSize: 40,
// //         color: '#010101'
// //       }}
// //     >
// //       React homework template
// //     </div>
// //   );
// // };
// export default App;

import {useState} from "react"
import { Statistics }from './Statistics/Statistics.jsx'
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';

const App = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0
  // }


  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  // const options = ['good', 'neutral', 'bad'];

  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onClickFeedback = option => {
    setFeedbacks(prevState => {
      return { ...prevState, [option]: prevState[option] + 1 };
    });
  };

//  onClickFeedback = type =>
//     this.setState(prev => ({
//       [type]: prev[type] + 1,
//     }));

  const countTotalFeedback = () => {
  const {good, neutral, bad} = feedbacks;
  return good + neutral + bad;
  }



  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = feedbacks;
    const total = good + neutral + bad;

    return total ? Math.round((good / total) * 100) : 0;
    // const { good, neutral, bad } = feedbacks;
    // return Math.round((good / countTotalFeedback()) * 100);
  };



  
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onClickFeedback}
          />
        </Section>
        <Section title = "Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good = {feedbacks.good}
              neutral = {feedbacks.neutral}
              bad = {feedbacks.bad}
              total = {countTotalFeedback()}
              positivePercentage = {countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message = "There is no feedback" />
          )}
        </Section>
      </>
    );
  }



export default App;