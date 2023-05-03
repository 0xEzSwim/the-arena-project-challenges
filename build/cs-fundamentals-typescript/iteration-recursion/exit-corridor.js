"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exitTheCorridor = void 0;
/**
 * In this corridor, schematized by a one-dimensional array, you can move from left to right, from box to box.
 * Each box is represented by a number.
 * A box containing a 0 indicates that you can move to the next box
 * Some boxes will contain a number greater than 0, which indicates the presence of a door.
 * This magic door will take you to the index indicated by the number.
 * Then, you can continue to move forward in the corridor.
 * Once you reach the end of the corridor, you will report the number of boxes you have been through.
 * A door is not counted as a box!
 * @param corridor - An array of numbers ex: [0, 0, 4, 0, 0]
 * @returns the number of boxes you need to go through before exiting
 */
const exitTheCorridor = (corridor) => {
    return exitTheCorridorRecurse(corridor, 0);
};
exports.exitTheCorridor = exitTheCorridor;
const exitTheCorridorRecurse = (corridor, index) => {
    if (index > corridor.length - 1) {
        return 0;
    }
    else if (corridor[index] == 0) {
        return 1 + exitTheCorridorRecurse(corridor, index + 1);
    }
    return exitTheCorridorRecurse(corridor, corridor[index]);
};
