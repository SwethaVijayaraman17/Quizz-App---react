import React from "react";

const QuizApp = (props) => {
    const { question, setNxtQues, nxtQues, score, setscore } = props;

    const handleNextQuestion = (answer, index) => {
        setNxtQues(index + 1);
        question.map((obj) => {
            if (obj.ans === answer) {
                setscore(score + 1);
            }
        })
    }
    console.log(nxtQues, question.length, 'aa');
    return (
        <div className="quizApp">
            <h1>Welcome to Quiz App</h1>

            {(nxtQues < question.length) ?
                question.map((quiz, i) => (
                    (nxtQues === i) &&
                    <div id="flexContainer">
                        <div className="question" id={`ques${i + 1}`}>{i + 1}. {quiz.ques}</div>
                        <div className="options">
                            {quiz.options.map((opt, idx) => (
                                <p id={`option${idx + 1}`} onClick={() => handleNextQuestion(opt, i)}>{opt}</p>
                            ))}
                        </div>
                    </div>
                ))
                : <div id="score">You have scored {score} out of 5 !!</div>}
        </div>
    )
}

export default QuizApp;