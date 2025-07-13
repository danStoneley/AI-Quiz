import Input from "./components/Input";
import Quiz from "./components/Quiz";
import Loading from "./components/Loading";
import { useState } from "react";
import Score from "./components/Score";
import './App.css';

function App() {
    const [quizData, setQuizData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [scoring, setScoring] = useState(false);
    const [actualScore, setActualScore] = useState(0);
    const [outOfQuiz, setOutOfQuiz] = useState(0);
    const [answers, setAnswers] = useState([]);

    function resetForPlayAgain() {
        setQuizData(null);
        setLoading(false);
        setScoring(false);
        setActualScore(0);
        setOutOfQuiz(0);
    }

    if (!quizData && loading)
        return (
            <div className="container mt-4">
                <Loading />
            </div>
        );

    if (!quizData && !loading)
        return (
            <div className="container mt-4">
                <h1 className="text-center mb-4">quiz</h1>
                <Input onQuizReady={setQuizData} onLoadingChange={setLoading} />
            </div>
        );
    if (scoring)
        return (
            <Score
                score={actualScore}
                total={outOfQuiz}
                resetForPlayAgain={resetForPlayAgain}
                quiz={quizData.quiz}
                answers={answers}
            />
        );
    if (quizData)
        return (
            <div className="container mt-4">
                <h1 className="text-center mb-4">questions</h1>
                <Quiz quiz={quizData} setScoring={setScoring} setActualScore={setActualScore} setOutOfQuiz={setOutOfQuiz} resetForPlayAgain={resetForPlayAgain} answers={answers} setAnswers={setAnswers} />
            </div>
        );
}

export default App;
