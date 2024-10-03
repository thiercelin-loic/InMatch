// src/actions.ts
import { Player } from './player';
import { randomInRange } from './utils';

/**
 * Simulate a passing action
 * @param passer - The player passing the ball
 * @returns Whether the pass was successful (boolean)
 */
export const passBall = (passer: Player): boolean => {
    const passOutcome = randomInRange(0, 100);
    return passOutcome <= passer.passing;
};

/**
 * Simulate a shooting action
 * @param shooter - The player attempting the shot
 * @returns Points scored (0, 2, or 3)
 */
export const shootBall = (shooter: Player): number => {
    const shotOutcome = randomInRange(0, 100);
    if (shotOutcome <= shooter.shooting) {
        return randomInRange(1, 3); // 2 or 3 points
    }
    return 0; // Missed shot
};

/**
 * Simulate a defensive action
 * @param defender - The player defending the shot
 * @returns Whether the defender successfully blocked the shot
 */
export const defendShot = (defender: Player): boolean => {
    const defenseOutcome = randomInRange(0, 100);
    return defenseOutcome <= defender.defense;
};
