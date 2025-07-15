import QuestionCard from "./QuestionCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Quiz.css";

function Quiz({
    quiz,
    setScoring,
    setActualScore,
    setOutOfQuiz,
    resetForPlayAgain,
    answers,
    setAnswers,
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
        }),
    };

    const correctAnswers = quiz.quiz.map((q) => q.correctAnswer);
    const updatedAnswers = [...answers];

    function givenAnswer(answer) {
        updatedAnswers[currentIndex] = answer;
        setAnswers(updatedAnswers);
    }

    function compareAnswers() {
        return correctAnswers.reduce(
            (score, correct, i) =>
                score + (correct === updatedAnswers[i] ? 1 : 0),
            0
        );
    }

    return (
        <div className="quiz-wrapper">
            <h4 className="text-center mb-4">
                {currentIndex + 1}/{quiz.quiz.length}
            </h4>

            <div className="question-slide-container">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial={currentIndex === 0 ? "center" : "enter"}
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                        className="question-motion-wrapper"
                    >
                        <QuestionCard
                            questionObj={quiz.quiz[currentIndex]}
                            setAnswer={givenAnswer}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="button-row">
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    disabled={currentIndex === 0}
                    onClick={() => {
                        setDirection(-1);
                        setCurrentIndex((prev) => Math.max(prev - 1, 0));
                    }}
                >
                    Prev
                </button>

                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    hidden={currentIndex === quiz.quiz.length - 1}
                    onClick={() => {
                        setDirection(1);
                        setCurrentIndex((prev) =>
                            Math.min(prev + 1, quiz.quiz.length - 1)
                        );
                    }}
                >
                    Next
                </button>

                <button
                    type="button"
                    className="btn btn-primary"
                    hidden={currentIndex !== quiz.quiz.length - 1}
                    onClick={() => {
                        setScoring(true);
                        setActualScore(compareAnswers());
                        setOutOfQuiz(quiz.quiz.length);
                    }}
                >
                    Scores
                </button>

                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={resetForPlayAgain}
                >
                    Play Again
                </button>
            </div>
        </div>
    );
}

export default Quiz;
