import { useState } from "react";

function Input({ onQuizReady, onLoadingChange }) {
    const arr = ["easy", "medium", "hard", "very hard", "impossible"]; // difficulty levels
    const [topic, setTopic] = useState("");
    const [count, setCount] = useState(10); // default count
    const [difficulty, setDifficulty] = useState("easy"); // default difficulty

    const handleSubmit = async (e) => { // handle form submission
        e.preventDefault();
        onLoadingChange(true);
        try {
            const response = await fetch("http://localhost:3000/api/quiz", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    topic: topic.trim(),
                    count: count,
                    difficulty: difficulty.trim(), 
                }),
            });
            console.log(response);
            const data = await response.json();
            onQuizReady(data);
            onLoadingChange(false);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };
    return (
        <>
            <div className="mb-3">
                <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                >
                    enter topic {topic.trim().length}/20
                </label>
                <input
                    type="text"
                    value={topic}
                    required={true}
                    onChange={(e) => setTopic(e.target.value)}
                    maxLength="20"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="gimme a topic"
                ></input>
            </div>
            <label htmlFor="customRange1" className="form-label">
                how many questions? {count}
            </label>
            <input
                type="range"
                min="1"
                max="20"
                defaultValue={count}
                onChange={(e) => setCount(e.target.value)}
                className="form-range"
                id="questionRange"
            ></input>

            <div className="mb-3">
                <label htmlFor="difficultySelect" className="form-label">
                    select difficulty
                </label>
                <select
                    type="hidden"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="form-select"
                    id="difficultySelect"
                >
                    {arr.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
                <button
                    type="button"
                    className="btn btn-primary mt-3"
                    disabled={topic.trim().length < 3} // disable button if topic is empty or less than 3 characters
                    onClick={handleSubmit}
                >
                    submit
                </button>
            </div>
        </>
    );
}

export default Input;
