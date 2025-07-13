function Topic({ topic, setTopic }) {
    return (
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
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
    );
}
    export default Topic;