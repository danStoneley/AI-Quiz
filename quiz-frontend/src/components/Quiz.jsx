import QuestionCard from "./QuestionCard";
import { useState } from "react";

function Quiz({ quiz, setScoring, setActualScore, setOutOfQuiz,resetForPlayAgain, answers, setAnswers }) {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const correctAnswers = [];
    for (let i = 0; i < quiz.quiz.length; i++) {
        correctAnswers.push(quiz.quiz[i].correctAnswer);
    }
    const updatedAnswers = [...answers];

    function givenAnswer(answer) {
        updatedAnswers[currentIndex] = answer;
        setAnswers(updatedAnswers);
    }
    function compareAnswers() {
        let score = 0;
        for (let i = 0; i < correctAnswers.length; i++) {
            if (correctAnswers[i] === updatedAnswers[i]) {
                score++;
            }
        }
        return score;
    }

    return (
        <div>
            <h4 className="text-center mb-4">
                {currentIndex + 1}/{quiz.quiz.length}
            </h4>
            <QuestionCard
                questionObj={quiz.quiz[currentIndex]}
                setAnswer={givenAnswer}
            />
            <button
                hidden={currentIndex === 0}
                disabled={currentIndex === 0}
                type="button"
                className="btn btn-secondary mt-3"
                onClick={() => {
                    if (currentIndex > 0) {
                        setCurrentIndex(currentIndex - 1);
                    }
                }}
            >
                Previous Question
            </button>
            <button
                type="button"
                className="btn btn-primary mt-3"
                onClick={() => {
                    if (currentIndex === quiz.quiz.length - 1) {
                        setScoring(true);
                        setActualScore(compareAnswers());
                        setOutOfQuiz(quiz.quiz.length);
                    } else {
                        setCurrentIndex(currentIndex + 1);
                    }
                }}
            >
                {currentIndex < quiz.quiz.length - 1
                    ? "Next Question"
                    : "Finish Quiz"}
            </button>
            <button
                type="button"
                className="btn btn-primary mt-3"
                onClick={() => {
                    resetForPlayAgain();
                }}
            >
                Play Again
            </button>
        </div>
    );
}
export default Quiz;
