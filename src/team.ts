// src/team.ts
import { Player } from './player';

export type Team = {
    name: string;
    players: Player[];
    score: number;
};

/**
 * Create a new team
 * @param name - Team name
 * @param players - List of players in the team
 * @returns A new Team object
 */
export const createTeam = (name: string, players: Player[]): Team => ({
    name,
    players,
    score: 0,
});
