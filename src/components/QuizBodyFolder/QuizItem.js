// import { memo } from "react";

// export const QuizItem = ({ question, quizAnswerChoices, chosenUserAnswer, correctAnswer, handleChosenAnswer, answered }) => {
//     const buttonElement = quizAnswerChoices.map((choice, index) => {
//         const finalClassName = `quiz-item-options-item 
//             ${chosenUserAnswer === choice ? "chosen-answer" : ""}`;

//         const checkIfAnswered = answered ?
//             `${correctAnswer === choice ? "correct" : "wrong"}` : "";

//         return (
//             <button
//                 key={index}
//                 className={`${finalClassName} ${checkIfAnswered}`}
//                 onClick={() => !answered ? handleChosenAnswer(question, choice) : ""}
//             >
//                 {choice}
//             </button>
//         );
//     })
//     console.log({ question, quizAnswerChoices, chosenUserAnswer, correctAnswer, handleChosenAnswer, answered })

//     return (
//         <div className="quiz-item">
//             <h4>{question}</h4>
//             <div className="quiz-item-options">
//                 {buttonElement}
//             </div>
//         </div>
//     );
// };

import { memo } from "react";

export const QuizItem = memo(({
    question,
    quizAnswerChoices,
    chosenUserAnswer,
    correctAnswer,
    handleChosenAnswer,
    answered }) => {
    const buttonElement = quizAnswerChoices.map((choice, index) => {
        const finalClassName = `quiz-item-options-item
            ${chosenUserAnswer === choice ? "chosen-answer" : ""}`;

        const checkIfAnswered = answered ?
            `${correctAnswer === choice ? "correct" : "wrong"}` : "";

        return (
            <button
                key={index}
                className={`${finalClassName} ${checkIfAnswered}`}
                onClick={() => !answered ? handleChosenAnswer(question, choice) : ""}
            >
                {choice}
            </button>
        );
    })
    
    return (
        <div className="quiz-item">
            <h4>{question}</h4>
            <div className="quiz-item-options">
                {buttonElement}
            </div>
        </div>
    );
}, (p, n) => JSON.stringify(p) === JSON.stringify(n));