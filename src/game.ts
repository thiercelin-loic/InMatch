// src/game.ts
import { Team } from './team';
import { Player } from './player';
import { passBall, shootBall, defendShot } from './actions';
import { selectRandomPlayer, randomInRange } from './utils';

export type GameState = {
    homeTeam: Team;
    awayTeam: Team;
    gameClock: number;  // Game clock in seconds
    possession: 'home' | 'away';
    currentAction: string;
};

/**
 * Simulate an action in the game.
 * @param state - The current game state
 * @returns The updated game state after the action
 */
export const simulateAction = (state: GameState): GameState => {
    const currentTeam = state.possession === 'home' ? state.homeTeam : state.awayTeam;
    const opponentTeam = state.possession === 'home' ? state.awayTeam : state.homeTeam;

    // Simulate a passing action
    const passer = selectRandomPlayer(currentTeam.players);
    let actionLog = `${passer.name} passes the ball. `;
    const passSuccess = passBall(passer);

    if (passSuccess) {
        const shooter = selectRandomPlayer(currentTeam.players);
        actionLog += `${shooter.name} attempts a shot. `;
        const defender = selectRandomPlayer(opponentTeam.players);
        const blockSuccess = defendShot(defender);

        if (!blockSuccess) {
            const points = shootBall(shooter);
            currentTeam.score += points;
            actionLog += points > 0 ? `Shot made for ${points} points!` : 'Missed the shot.';
        } else {
            actionLog += `${defender.name} blocked the shot!`;
        }
    } else {
        actionLog += 'The pass was unsuccessful!';
    }

    return {
        ...state,
        homeTeam: state.possession === 'home' ? currentTeam : state.homeTeam,
        awayTeam: state.possession === 'home' ? state.awayTeam : currentTeam,
        currentAction: actionLog,
        possession: state.possession === 'home' ? 'away' : 'home',
        gameClock: state.gameClock - 24,  // Advance the clock by 24 seconds
    };
};
