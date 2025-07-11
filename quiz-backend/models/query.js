class Query {
    constructor(topic, count, difficulty) {
        this._validateInputs(topic, count, difficulty)
    }
    getCount() {
        return this.count
    }
    getTopic() {
        return this.topic
    }
    getDifficulty() {
        return this.difficulty
    }
    _validateInputs(topic, count, difficulty) {
        const validCount = count < 20 && count > 0;
        const trimmedTopic = topic.trim()
        const validTopic = trimmedTopic.length < 20;
        const validDifficulty = ["easy", "medium", "hard", "very hard", "impossible"].includes(difficulty.toLowerCase());

        if (validCount && validDifficulty && validTopic) {
            this.count = count;
            this.difficulty = difficulty;
            this.topic = trimmedTopic;
        } else {
            throw new Error("Invalid Query: Ensure count is 1-20, topic is under 20 chars, and difficulty is valid.")
        }
    }
}

export { Query }