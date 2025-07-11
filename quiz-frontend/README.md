# React + Vite
# AI Quiz App (MVP)

This is a full-stack quiz app powered by the OpenAI GPT-4 API.

Users enter a topic, select difficulty and question count, and receive a custom quiz. Questions are answered one at a time, and the final score is shown at the end.

## Features

- Topic-based multiple choice quizzes generated dynamically via ChatGPT
- One-question-at-a-time flow with user answer tracking
- Score summary screen with feedback
- Loading state handling and input validation
- Basic styling with Bootstrap

## Tech Stack

- **Frontend:** React (Vite) + Bootstrap
- **Backend:** Node.js + Express
- **AI:** OpenAI GPT-4 API
- **State:** React hooks + controlled components

## Getting Started

1. Clone the repo
2. Run `npm install` in both `/quiz-frontend` and `/quiz-backend`
3. Add your OpenAI API key to `/quiz-backend/.env`:


## Notes

- This is a basic MVP — future features will include animations, user stats, and category filtering.
- All questions are generated using GPT-4; prompt and seed control are handled server-side.