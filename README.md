# Calculation game

Welcome to the Calculation game, an interactive web application designed to sharpen your arithmetic skills in a fun and engaging way. The application presents you with simple addition problems involving two random digits, and your task is to enter the correct sum. As you solve these problems, the app keeps track of your answers, providing instant feedback on whether your responses are correct or incorrect.

## Features
- Dynamic Addition Problems: Encounter a variety of addition problems featuring two random digits. Challenge yourself to solve them quickly and accurately!
- Calculation History: Review your past answers with a history log displayed directly below the current problem. Track your progress and learn from past mistakes.
- Feedback on Answers: Immediate feedback is provided for each answer, with correct answers marked as "correct" and incorrect ones as "wrong," helping you learn and improve.
- State Management with Redux Toolkit: Leveraging Redux Toolkit, the app efficiently manages and displays the history of your calculations, ensuring a seamless user experience.
- Stylish Interface with Material UI: Enjoy a sleek and user-friendly interface built with - Material UI, adhering to the principles of Material design for a visually appealing experience.
- Modular and Maintainable Code: The app's codebase is thoughtfully organized into smaller, meaningful components, promoting code reuse and maintainability.
- React Hooks and TypeScript: Built with modern React, utilizing Hooks for state and lifecycle features, and TypeScript for type safety and developer productivity.
- Comprehensive Testing: Ensuring reliability and correctness with thorough unit tests and end-to-end (e2e) tests, covering key functionalities and user interactions.

## Setup Instructions

To set up the project locally, follow these steps:

### Prerequisites

- Make sure you have [Node.js](https://nodejs.org/) installed (version 21 would be ideal).
- [Docker](https://www.docker.com/get-started) is required if you intend to run the project in a container.

### A) Installation with Docker

1. Clone the repository and navigate to root directory:

```bash
git clone git@github.com:tim-koprivnik/calculation-game.git
cd calculation-game
```

2. Ensure Docker is running on your machine.

3. In the root of the cloned repository, build and start the Docker container:

- For production:

```bash
docker-compose -f docker-compose.yml up --build
```

- For development:

```bash
docker-compose -f docker-compose.dev.yml up
```

4. Once the build is complete and the containers are running, the application should be accessible at <http://localhost:3000>.

To stop and remove the Docker containers, use:

```bash
docker-compose down
```

### B) Installation without Docker

1. Clone the repository and navigate to root directory:

```bash
git clone git@github.com:tim-koprivnik/calculation-game.git
cd calculation-game
```

2. Go to calculation-game directory:

```bash
cd calculation-game
```

3. Install project dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. The application should now be running and accessible at <http://localhost:3000>.

### Testing setup

- To run the unit tests with Jest:

```bash
npm run test
```

or (for watch mode)

```bash
npm run test:watch
```

- To open Cypress for end-to-end tests:

```bash
npm run cypress:open
```
