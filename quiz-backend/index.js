import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { generateResponse } from './api/chatGptClient.js';
import { Query } from './models/query.js';
import { buildPrompt } from './services/promptBuilder.js';

dotenv.config();

const app = express();
app.use(cors());              // allow frontend to access backend
app.use(express.json());

app.post('/api/quiz', async (req, res) => {
    const { topic, count, difficulty } = req.body;

    const query = new Query(topic, count, difficulty);
    const prompt = buildPrompt(query);

    try {
        const quiz = await generateResponse(prompt);
        res.json(quiz);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Failed to generate quiz' });
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
