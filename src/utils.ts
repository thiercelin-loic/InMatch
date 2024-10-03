// src/utils.ts
import { Player } from "./player";
/**
 * Generate a random number between a given range
 * @param min - Minimum value (inclusive)
 * @param max - Maximum value (inclusive)
 * @returns Random number within the range
 */
export const randomInRange = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Randomly select a player from the team
 * @param players - List of players on a team
 * @returns A randomly selected player
 */
export const selectRandomPlayer = (players: Player[]): Player => {
    return players[randomInRange(0, players.length - 1)];
};
