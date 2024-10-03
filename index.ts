import { createPlayer } from './src/player';
import { createTeam } from './src/team';
import { simulateAction, GameState } from './src/game';

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
