import { useState } from "react";
import { motion } from "framer-motion";
import Difficulty from "./Difficulty";
import Count from "./Count";
import Topic from "./Topic";
import Submit from "./Submit";

function Input({ onQuizReady, onLoadingChange }) {
    const [topic, setTopic] = useState("");
    const [count, setCount] = useState(10); // default count
    const [difficulty, setDifficulty] = useState("easy"); // default difficulty

    const handleSubmit = async (e) => {
        // handle form submission
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
            <Topic topic={topic} setTopic={setTopic} />
            {topic.trim().length > 3 && (
                <>
                    <motion.div
                        initial={{ opacity: 0, x: -200 }}

                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .5 }}
                    >
                        <Difficulty
                            topic={topic}
                            difficulty={difficulty}
                            setDifficulty={setDifficulty}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -200 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .75 }}
                    >
                        <Count
                            topic={topic}
                            count={count}
                            setCount={setCount}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -200 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Submit topic={topic} handleSubmit={handleSubmit} />
                    </motion.div>
                </>
            )}
        </>
    );
}

export default Input;
