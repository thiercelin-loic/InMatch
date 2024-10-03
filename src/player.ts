// src/player.ts

export type Player = {
    name: string;
    shooting: number;  // Shooting skill (0 to 100)
    passing: number;   // Passing skill (0 to 100)
    defense: number;   // Defense skill (0 to 100)
    stamina: number;   // Stamina (0 to 100)
    fouls: number;     // Number of fouls
};

/**
 * Create a new player
 * @param name - Player's name
 * @param shooting - Shooting skill level (0-100)
 * @param passing - Passing skill level (0-100)
 * @param defense - Defense skill level (0-100)
 * @param stamina - Stamina level (0-100)
 * @returns A new Player object
 */
export const createPlayer = (name: string, shooting: number, passing: number, defense: number, stamina: number): Player => ({
    name,
    shooting,
    passing,
    defense,
    stamina,
    fouls: 0,
});
