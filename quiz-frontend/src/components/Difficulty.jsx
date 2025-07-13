function Difficulty({ topic, difficulty, setDifficulty }) {

    const arr = ["easy", "medium", "hard", "very hard", "impossible"]; 
    return (
        <div className="mb-3">
            <label
                htmlFor="difficultySelect"
                className="form-label"
            >
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
        </div>
    );
}

export default Difficulty;
