<img src='./assets/logo.png' width=150/>

# InMatch

This TypeScript library simulates a basketball game action by action in a functional programming style. Each possession consists of passing, shooting, defending, and scoring mechanics. The game progresses by simulating each action step-by-step.

## Installation

Clone the repository:

```bash
git clone https://github.com/thiercelin-loic/InMatch.git
```

## Functions

```bash
createPlayer(name: string, shooting: number, passing: number, defense: number, stamina: number): Player
```

Creates a new player object with specified attributes.

```bash
createTeam(name: string, players: Player[]): Team
```

Creates a new team object with a list of players.

```bash
simulateAction(state: GameState): GameState
```

Simulates a single basketball action (pass, shot, defense) based on the current game state. Returns the updated game state, including the new possession, score, and the log of the action taken.

## Game Mechanics

Passing: A random player from the team with possession attempts a pass.
Shooting: If the pass is successful, another random player attempts a shot.
Defending: The opposing team tries to block the shot.
Scoring: If the shot is successful, points are awarded to the shooting team.
Future Work
Add more complex game actions (e.g., fouls, turnovers).
Improve player fatigue system based on stamina.
Implement different play styles (e.g., fast breaks, isolation).

## Usage

To use theses functions in your project, please copy the code bellow :

```bash
// Create players
const player1 = createPlayer("John Doe", 75, 80, 60, 90);
const player2 = createPlayer("Jane Smith", 85, 70, 65, 85);

// Create teams
const homeTeam = createTeam("Home Team", [player1, player2]);
const awayTeam = createTeam("Away Team", [player1]);

// Initialize game state
const initialState: GameState = {
    homeTeam,
    awayTeam,
    gameClock: 2880,  // 48 minutes in seconds
    possession: 'home',
    currentAction: '',
};

// Simulate actions step by step
let gameState = initialState;
while (gameState.gameClock > 0) {
    gameState = simulateAction(gameState);
    console.log(gameState.currentAction);
}

console.log(`Final Score: ${gameState.homeTeam.name} ${gameState.homeTeam.score}, ${gameState.awayTeam.name} ${gameState.awayTeam.score}`);
```
