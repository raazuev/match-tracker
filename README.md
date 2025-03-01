# Match Tracker

Match Tracker is a web application for tracking and displaying match information. The project uses advanced technologies and architectural approaches to ensure scalability and code usability.

## Project Description

Match Tracker allows users to track information about current and completed matches, as well as their results, players and teams. The project implements support for data updates via API with the server.

The application includes the following functional blocks:

- Viewing information about matches.
- Match results with detailed data on players.
- Interactive interface with the ability to update match data.

The project uses Feature-Sliced Design (FSD) architectural approach, which provides good code structure and scalability.

## Technologies

- **React + TypeScript**
- **SCSS**
- **React Query**
- **Axios**
- **Vite**

## Project structure

└── 📁src
    └── 📁app
    └── 📁entities
    └── 📁pages
    └── 📁shared
    └── 📁widgets
    └── 📁features
    └── 📁main.tsx

## The main features of the structure:

- app - initial entry point and routing settings.
- entities - business logic and domain entities (e.g., match, team).
- pages - components for displaying application pages.
- shared - common components, helpers, APIs.
- widgets - widgets and overused components.
- features - functional blocks that can include both UI components and data interaction logic.

## Installation

1. Cloning a repository
bash
Copy
Edit
git clone https://github.com/your-username/match-tracker.git
cd match-tracker

2. Installing dependencies
Make sure you have Node.js version 16 or higher installed.

bash
Copy
Edit
npm install
# or, if using yarn
yarn install

3. Starting a project
To start the project in development mode, use the command:

bash
Copy
Edit
npm run dev
# or, if using yarn
yarn dev

The application will then be available at http://localhost:3000.

4. Deployment
To build the project for the production environment, run the command:

bash
Copy
Edit
npm run build
# or
yarn build