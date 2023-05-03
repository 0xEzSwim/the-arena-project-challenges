type Coordinate = [number, number];
export type Matrix = number[][];
type FindPathFn = (begin: Coordinate, end: Coordinate, matrix: Matrix) => number;

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
export const findShortestPath: FindPathFn = (begin: Coordinate, end: Coordinate, matrix: Matrix): number => {
    const paths = [] as Coordinate[][];

    const goUp = (currentPositon: Coordinate): Coordinate => {
        const newPositon: Coordinate = [...currentPositon];
        newPositon[1] -= 1;
        return newPositon;
    };
    
    const goDown = (currentPositon: Coordinate): Coordinate => {
        const newPositon: Coordinate = [...currentPositon];
        newPositon[1] += 1;
        return newPositon;
    };
    
    const goLeft = (currentPositon: Coordinate): Coordinate => {
        const newPositon: Coordinate = [...currentPositon];
        newPositon[0] -= 1;
        return newPositon;
    };
    
    const goRight = (currentPositon: Coordinate): Coordinate => {
        const newPositon: Coordinate = [...currentPositon];
        newPositon[0] += 1;
        return newPositon;
    };
    
    const isPositionEqual = (sourcePosition: Coordinate, targetPosition: Coordinate): boolean => {
        return sourcePosition[0] === targetPosition[0] && sourcePosition[1] === targetPosition[1];
    };
    
    const isPositionExplored = (currentPositon: Coordinate, exploredPositions: Coordinate[]): boolean => {
        return exploredPositions.some((exploredPosition) => isPositionEqual(currentPositon, exploredPosition));
    };
    
    const canGoToPosition = (nextPosition: Coordinate, exploredPositions: Coordinate[]): boolean => {
        const nextMatrixRow = matrix[nextPosition[1]];
        const valueAtPosition = nextMatrixRow ? nextMatrixRow[nextPosition[0]] : 0;
        return !isPositionExplored(nextPosition, exploredPositions) && valueAtPosition === 1;
    };
    
    const findPathsRecursive = (currentPosition: Coordinate, exploredPositions: Coordinate[]) => {
        if(isPositionEqual(currentPosition, end)){
            paths.push(exploredPositions);
        }
    
        const exploredTemp: Coordinate[] = [...exploredPositions, currentPosition];
        const upPosition: Coordinate = goUp(currentPosition);
        if(canGoToPosition(upPosition, exploredPositions)){
            findPathsRecursive(upPosition, exploredTemp);
        }
        const downPosition: Coordinate = goDown(currentPosition);
        if(canGoToPosition(downPosition, exploredPositions)){
            findPathsRecursive(downPosition, exploredTemp);
        }
        const leftPosition: Coordinate = goLeft(currentPosition);
        if(canGoToPosition(leftPosition, exploredPositions)){
            findPathsRecursive(leftPosition, exploredTemp);
        }
        const rightPosition: Coordinate = goRight(currentPosition);
        if(canGoToPosition(rightPosition, exploredPositions)){
            findPathsRecursive(rightPosition, exploredTemp);
        }
    };

    findPathsRecursive(begin, []);
    const shortestPathFirst = paths.map((path) => path.length + 1).sort((a, b) => a - b);
    return shortestPathFirst[0];
};