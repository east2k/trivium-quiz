// import React, { useEffect, useMemo, useState } from "react";
// import { QuizItem } from "./QuizItem";
// import fetchApi from "../../fetchApi";

// const Quizes = ({ settings, handlePlayButton }) => {
//     const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);

//     const [userScore, setUserScore] = useState(0);

//     const [answered, setAnswered] = useState(false);

//     const [playAgainState, setPlayAgainState] = useState(false);

//     const [denyUser, setDenyUser] = useState(false)

//     const [timelimit, setTimelimit] = useState(settings.quizSettingsLimit);

//     // Time Limit
//     useEffect(() => {
//         if (answered) return;
//         if (timelimit === 0) {
//             passUserScores()
//         } else {
//             const interval = setInterval(() => {
//                 setTimelimit(timelimit - 1);
//             }, 1000)

//             return () => clearInterval(interval);
//         };
//     }, [timelimit]);

//     const minutes = Math.floor(timelimit / 60);
//     const seconds = timelimit % 60;


//     // Handle chosen answers from use
//     const handleChosenAnswer = (givenQuestion, chosenAnswer) => {
//         setQuestionsAndAnswers(prevQuestionAndAnswers => {
//             return prevQuestionAndAnswers.map(userInput => {
//                 return userInput.question === givenQuestion
//                     ?
//                     {
//                         ...userInput,
//                         chosenUserAnswer: chosenAnswer
//                     }
//                     :
//                     {
//                         ...userInput
//                     }
//             })
//         });
//     }

//     // Pass the user score
//     const passUserScores = () => {
//         const filteredAnswers = questionsAndAnswers.filter(item => {
//             return item.correctAnswer === item.chosenUserAnswer
//         })
//         setAnswered(true);
//         setDenyUser(false)
//         setUserScore(filteredAnswers.length);
//     }

//     // Alert user to complete input
//     const denyUserScores = () => {
//         setDenyUser(true)
//     }

//     // Handle if user answered all
//     const handleClickButton = () => {
//         const checkFirst = questionsAndAnswers.some(item => item.chosenUserAnswer === "")
//         checkFirst ? denyUserScores() : passUserScores();
//     }

//     // Handle if user want's to play again
//     const playAgain = () => {
//         setAnswered(false);
//         setDenyUser(false)
//         setUserScore(0);
//         setTimelimit(settings.quizSettingsLimit)
//         setQuestionsAndAnswers([])
//         setPlayAgainState(prevState => !prevState);
//     }

//     // Fetch data from API
//     useEffect(() => {
//         fetchApi(settings).then(({ results }) => {
//             const questions = results.map(quiz => {
//                 const quizAnswerChoices = [quiz.correct_answer, ...quiz.incorrect_answers];
//                 const shuffledChoices = quizAnswerChoices.sort(() => 0.5 - Math.random());

//                 return {
//                     question: quiz.question,
//                     answers: shuffledChoices,
//                     correctAnswer: quiz.correct_answer,
//                     chosenUserAnswer: ""
//                 }
//             })
//             setQuestionsAndAnswers(questions)
//         }).catch(err => console.log(err));
//     }, [playAgainState])

//     // Map for element
//     const quizItemElement = questionsAndAnswers.map((quiz, index) => {
//         console.log(quiz.question)
//         return (
//             <QuizItem
//                 key={index}
//                 question={quiz.question}
//                 quizAnswerChoices={quiz.answers}
//                 chosenUserAnswer={quiz.chosenUserAnswer}
//                 correctAnswer={quiz.correctAnswer}
//                 answered={answered}
//                 handleChosenAnswer={handleChosenAnswer}
//             />
//         )
//     });

//     return (
//         <div className="quizes-component">
//             {
//                 questionsAndAnswers.length !== 0 &&
//                 !isNaN(timelimit) &&
//                 <div className="quiz-time-left-container">
//                     <p>Time Left: {minutes} minutes and {seconds} second/s</p>
//                 </div>
//             }
//             <div className="quiz-list">
//                 {questionsAndAnswers.length === 0 && <h1 className="loading-message">Loading...</h1>}
//                 {quizItemElement}
//             </div>
//             <div className="quiz-submit-container">
//                 {denyUser && <p>Please answer all the questions first</p>}
//                 {answered && <p>You scored {userScore}/{questionsAndAnswers.length} correct answers</p>}
//                 <button
//                     className="quiz-button"
//                     onClick={answered ? playAgain : handleClickButton}
//                 >
//                     {answered ? "Play again" : "Check Answers"}
//                 </button>
//                 {answered &&
//                     <button
//                         className="quiz-button"
//                         onClick={handlePlayButton}
//                     >
//                         Return Home
//                     </button>
//                 }
//             </div>
//         </div>
//     )
// }

// export default Quizes;


import React, { useEffect, useMemo, useState } from "react";
import { QuizItem } from "./QuizItem";
import fetchApi from "../../fetchApi";

const Quizes = ({ settings, handlePlayButton }) => {
    const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);

    const [userScore, setUserScore] = useState(0);

    const [answered, setAnswered] = useState(false);

    const [playAgainState, setPlayAgainState] = useState(false);

    const [denyUser, setDenyUser] = useState(false)

    const [timelimit, setTimelimit] = useState(settings.quizSettingsLimit);

    // Time Limit
    useEffect(() => {
        if (answered) return;
        if (timelimit === 0) {
            passUserScores()
        } else {
            const interval = setInterval(() => {
                setTimelimit(timelimit - 1);
            }, 1000)

            return () => clearInterval(interval);
        };
    }, [timelimit]);

    const minutes = Math.floor(timelimit / 60);
    const seconds = timelimit % 60;


    // Handle chosen answers from use
    const handleChosenAnswer = (givenQuestion, chosenAnswer) => {
        setQuestionsAndAnswers(prevQuestionAndAnswers => {
            return prevQuestionAndAnswers.map(userInput => {
                return userInput.question === givenQuestion
                    ?
                    {
                        ...userInput,
                        chosenUserAnswer: chosenAnswer
                    }
                    :
                    {
                        ...userInput
                    }
            })
        });
    }

    // Pass the user score
    const passUserScores = () => {
        const filteredAnswers = questionsAndAnswers.filter(item => {
            return item.correctAnswer === item.chosenUserAnswer
        })
        setAnswered(true);
        setDenyUser(false)
        setUserScore(filteredAnswers.length);
    }

    // Alert user to complete input
    const denyUserScores = () => {
        setDenyUser(true)
    }

    // Handle if user answered all
    const handleClickButton = () => {
        const checkFirst = questionsAndAnswers.some(item => item.chosenUserAnswer === "")
        checkFirst ? denyUserScores() : passUserScores();
    }

    // Handle if user want's to play again
    const playAgain = () => {
        setAnswered(false);
        setDenyUser(false)
        setUserScore(0);
        setTimelimit(settings.quizSettingsLimit)
        setQuestionsAndAnswers([])
        setPlayAgainState(prevState => !prevState);
    }

    // Fetch data from API
    useEffect(() => {
        fetchApi(settings).then(({ results }) => {
            const questions = results.map(quiz => {
                const quizAnswerChoices = [quiz.correct_answer, ...quiz.incorrect_answers];
                const shuffledChoices = quizAnswerChoices.sort(() => 0.5 - Math.random());

                return {
                    question: quiz.question,
                    answers: shuffledChoices,
                    correctAnswer: quiz.correct_answer,
                    chosenUserAnswer: ""
                }
            })
            setQuestionsAndAnswers(questions)
        }).catch(err => console.log(err));
    }, [playAgainState])

    // Map for element
    const quizItemElement = useMemo(() => questionsAndAnswers.map((quiz, index) => {
        return (
            <QuizItem
                key={index}
                question={quiz.question}
                quizAnswerChoices={quiz.answers}
                chosenUserAnswer={quiz.chosenUserAnswer}
                correctAnswer={quiz.correctAnswer}
                answered={answered}
                handleChosenAnswer={handleChosenAnswer}
            />
        )
    }), [questionsAndAnswers, answered]);

    return (
        <div className="quizes-component">
            {
                questionsAndAnswers.length !== 0 &&
                !isNaN(timelimit) &&
                <div className="quiz-time-left-container">
                    <p>Time Left: {minutes} minutes and {seconds} second/s</p>
                </div>
            }
            <div className="quiz-list">
                {questionsAndAnswers.length === 0 && <h1 className="loading-message">Loading...</h1>}
                {quizItemElement}
            </div>
            <div className="quiz-submit-container">
                {denyUser && <p>Please answer all the questions first</p>}
                {answered && <p>You scored {userScore}/{questionsAndAnswers.length} correct answers</p>}
                <button
                    className="quiz-button"
                    onClick={answered ? playAgain : handleClickButton}
                >
                    {answered ? "Play again" : "Check Answers"}
                </button>
                {answered &&
                    <button
                        className="quiz-button"
                        onClick={handlePlayButton}
                    >
                        Return Home
                    </button>
                }
            </div>
        </div>
    )
}

export default Quizes;