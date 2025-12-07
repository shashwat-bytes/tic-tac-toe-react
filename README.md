# Tic Tac Toe (React)

A simple Tic Tac Toe game built with React. Includes a Reset button to restart the game and uses react-toastify to display winner / draw notifications.

## Features
- 3x3 Tic Tac Toe gameplay
- Player turns (X and O)
- Reset button to restart the board and scores
- Winner / draw notifications via react-toastify
- Simple, minimal UI using functional components and hooks

## Demo
Run locally (instructions below) to play and see toast notifications for:
- Winner (e.g., "Player X wins!")
- Draw ("It's a draw!")

## Getting Started

Prerequisites
- Node.js (>= 14)
- npm or yarn

Install and run
1. Clone the repo:
    git clone <repo-url>
2. Install dependencies:
    cd tic-tac-toe
    npm install
3. Start the dev server:
    npm start
4. Open http://localhost:3000 in your browser

Build for production
- npm run build

## Usage
- Click any empty cell to place the current player's mark (X or O).
- The game will automatically detect a winner or draw and show a toast notification.
- Click the "Reset" button to clear the board and reset the game state.

## Implementation notes
- React functional components + hooks (useState, useEffect)
- react-toastify for notifications:
  - Toasts are triggered when a win or draw condition is met.
  - Example toast usage:
     import { toast } from 'react-toastify';
     toast.success('Player X wins!');
- Reset logic clears the board state and current player, and optionally resets scores.

## Project structure (example)
- src/
  - components/
     - Board.jsx
     - Square.jsx
     - Controls.jsx
  - App.jsx
  - index.jsx
- public/
- package.json

## Customization
- Change toast appearance in ToastContainer config (position, autoClose, theme).
- Add score tracking in state to persist wins between rounds.
- Add AI opponent (minimax or simple heuristics).

## Contributing
Contributions welcome — open an issue or PR with improvements or bug fixes.

## License
MIT
