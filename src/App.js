import { useState } from 'react';
import './App.css';
import QuizApp from './QuizApp';

function App() {
  const [question, setquestion] = useState([
    {
      ques:'Which of the following command is used to create react-js-app ?',
      options: ['npx create-react-app appname', 'npm install create-react-app', 'npx install create-react-app -g', 'install - l create-react-app'],
      ans: 'npx create-react-app appname',
    },
    {
      ques:'What is the default port number in which the application run ?',
      options: ['3000', '5000', '8080', '3030'],
      ans: '3000',
    },
    {
      ques:'Which of the following valid component return type of React ?',
      options: ['2', '3', '1', '5'],
      ans: '1',
    },
    {
      ques:'Which of the following is used to render components in web pages ?',
      options: ['DOM_render()', 'render()', 'Cross ReactDOM_render()', 'transfer()'],
      ans: 'render()',
    },
    {
      ques:'What command is used to start the React local development server?',
      options: ['npm build', 'npm run dev', 'npm serve', 'npm start'],
      ans: 'npm start',
    },
  ])
  const [nxtQues, setNxtQues] = useState(0);
  const [score, setscore] = useState(0);
  return (
    <div className="App">
      <QuizApp 
      question={question} 
      nxtQues={nxtQues} 
      setNxtQues={setNxtQues}
      score={score}
      setscore={setscore}
      />
    </div>
  );
}

export default App;
