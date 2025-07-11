import { Query } from "../models/query.js";

const seed = Date.now();

function buildPrompt(query) {
    if (!(query instanceof Query)) {
        throw new Error("Enter correct query object");
    }
    const systemPrompt = `You are a quiz generator. Always follow safe-for-work guidelines.
    Use British English by default. Assume most users are from the UK. Avoid Americanised spelling and terminology (e.g. use "football" to mean association football, unless the topic explicitly specifies "American football").
    Your output must be valid JSON, with no extra explanation or surrounding text. Return only the JSON object, not a string, message, or preamble.
    Use this format exactly:
    {
        "quiz": [
        {
            "question": "Sample question?",
            "options": ["Option A", "Option B", "Option C", "Option D"],
            "correctAnswer": "Option A"
        }
    ]
    }

    If generating more than one question, include all objects in the "quiz" array.
    If the topic is inappropriate, respond only with the string: "Topic not suitable for quiz generation."
    Each call should generate fresh, original questions. Avoid repeating exact phrasings or previously generated questions, even across sessions. Introduce internal variation by changing question structure, tone, subtopic focus, and difficulty nuance.
    Include different types of questions — fact recall, reasoning, timelines, terminology, comparisons, etc.
    Use the session seed provided in the user prompt as a randomiser to guide question diversity and internal variation.`;

    const userPrompt = 
    `Generate a quiz with ${query.getCount()} multiple-choice questions about "${query.getTopic()}" at a ${query.getDifficulty()} difficulty level.

    Each question must include:
    - One correct answer
    - Three plausible but incorrect options

    Use this reference token to introduce variation: [Seed: ${seed}]`;
    
    return { systemPrompt, userPrompt };
}

export { buildPrompt };
