function Count({ topic, count, setCount }) {
    return (
        <div className="input-group mb-3">
            <label
                htmlFor="customRange1"
                className="form-label"
    
            >
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
        </div>
    );
}

export default Count;