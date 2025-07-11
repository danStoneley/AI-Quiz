import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function generateResponse({ systemPrompt, userPrompt }) {
    try {
        const response = await client.chat.completions.create({
            model: "gpt-4",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt },
            ],
            temperature: 0.85,
            max_tokens: 2048,
        });
        const content = response.choices[0].message.content;
        return JSON.parse(content);
    } catch (error) {
        throw new Error(`OpenAI API Error: ${error.message}`);
    }
}

export { generateResponse };
