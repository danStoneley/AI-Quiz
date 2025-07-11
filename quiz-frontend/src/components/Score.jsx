import { Fragment } from "react";

function Score({ score, total, resetForPlayAgain, quiz, answers }) {

    function decideAnswer(option, answers, correctAnswer, index) {
        if (option === answers[index] && answers[index] !== correctAnswer) {
            return "list-group-item-danger";
        } else if (option === correctAnswer && answers[index] === correctAnswer) {
            return "list-group-item-success";
        } else if (option === correctAnswer && answers[index] !== correctAnswer) {
            return "list-group-item-info";
        }
        return "";
        
    }
    return (
        <>
            <div className="card p-3 mb-3">
                <h5>Your Score</h5>
                <p>
                    You scored {score} out of {total}
                </p>
                {quiz.map((q, index) => (
                    <div className="card mb-2 p-3" key={index}>
                        {q.question} (Question {index + 1})
                        <ul className="list-group">
                            {q.options.map((option) => (
                                <li className={`list-group-item ${decideAnswer(option, answers, q.correctAnswer, index)}`} key={option}>
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
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
        </>
    );
}
export default Score;
