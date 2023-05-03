"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findShortestPath = void 0;
/**
 * A path can only be constructed if the cell has a value equal to 1.
 * You can only move one square at a time, vertically or horizontally.
 * Diagonal movements are not allowed.
 * The edges of the matrix are not wraparound: we are not in Harry Potter.
 * The arguments will always correspond to a valid matrix.
 * A matrix will always contain at least one valid solution.
 * @param begin - maze start position
 * @param end - maze exit position
 * @param matrix - a two-dimensional array representing a maze
 * @returns the number of steps sideways you had to take to avoid the warriors
 */
const findShortestPath = (begin, end, matrix) => {
    const paths = [];
    const goUp = (currentPositon) => {
        const newPositon = [...currentPositon];
        newPositon[1] -= 1;
        return newPositon;
    };
    const goDown = (currentPositon) => {
        const newPositon = [...currentPositon];
        newPositon[1] += 1;
        return newPositon;
    };
    const goLeft = (currentPositon) => {
        const newPositon = [...currentPositon];
        newPositon[0] -= 1;
        return newPositon;
    };
    const goRight = (currentPositon) => {
        const newPositon = [...currentPositon];
        newPositon[0] += 1;
        return newPositon;
    };
    const isPositionEqual = (sourcePosition, targetPosition) => {
        return sourcePosition[0] === targetPosition[0] && sourcePosition[1] === targetPosition[1];
    };
    const isPositionExplored = (currentPositon, exploredPositions) => {
        return exploredPositions.some((exploredPosition) => isPositionEqual(currentPositon, exploredPosition));
    };
    const canGoToPosition = (nextPosition, exploredPositions) => {
        const nextMatrixRow = matrix[nextPosition[1]];
        const valueAtPosition = nextMatrixRow ? nextMatrixRow[nextPosition[0]] : 0;
        return !isPositionExplored(nextPosition, exploredPositions) && valueAtPosition === 1;
    };
    const findPathsRecursive = (currentPosition, exploredPositions) => {
        const exploredTemp = [...exploredPositions, currentPosition];
        if (isPositionEqual(currentPosition, end)) {
            paths.push(exploredTemp);
        }
        const upPosition = goUp(currentPosition);
        if (canGoToPosition(upPosition, exploredPositions)) {
            findPathsRecursive(upPosition, exploredTemp);
        }
        const downPosition = goDown(currentPosition);
        if (canGoToPosition(downPosition, exploredPositions)) {
            findPathsRecursive(downPosition, exploredTemp);
        }
        const leftPosition = goLeft(currentPosition);
        if (canGoToPosition(leftPosition, exploredPositions)) {
            findPathsRecursive(leftPosition, exploredTemp);
        }
        const rightPosition = goRight(currentPosition);
        if (canGoToPosition(rightPosition, exploredPositions)) {
            findPathsRecursive(rightPosition, exploredTemp);
        }
    };
    findPathsRecursive(begin, []);
    const shortestPathFirst = paths.map((path) => path.length).sort((a, b) => a - b);
    return shortestPathFirst[0];
};
exports.findShortestPath = findShortestPath;
