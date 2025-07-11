import { useState } from "react";

function QuestionCard({ questionObj, setAnswer }) {
    const { question, options } = questionObj;
    const [answer, setAnswerState] = useState("");

    return (
        <div className={"card p-3 mb-3"}>
            <h5>{question}</h5>
            <ul className="list-group">
                {options.map((option, idx) => (
                    <li
                        key={idx}
                        onClick={() => {
                            setAnswerState(option);
                            setAnswer(option);
                        }}
                        className={
                            answer === option
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        role="button"
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default QuestionCard;
