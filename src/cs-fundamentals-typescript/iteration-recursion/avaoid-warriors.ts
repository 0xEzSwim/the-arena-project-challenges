export type Runway = [number, number][];
type AvoidTheWarriorsFn = (runway: Runway) => number;
class Coordinate {
    x: number;
    y: number;
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    };
};
/**
 * Always move straight ahead.
 * As soon as you encounter a warrior, take a side step to dodge them and resume your run.
 * You can represent your path as a map seen from above, stored in a two-dimensional array.
 * In this scenario, warriors are represented by 1s. Safe spaces are represented by 0s.
 * The beginning of the runway is always located at the bottom left.
 * The runway always ends at the top left.
 * If you are never forced to take a step sideways, return 0.
 * @param runway - a two-dimensional array
 * @returns the number of steps sideways you had to take to avoid the warriors
 */
export const avoidTheWarriors: AvoidTheWarriorsFn = (runway: Runway): number => {
    const startingPosition: Coordinate = new Coordinate(0, runway.length -1);
    return avoidTheWarriorsRecurse(runway, startingPosition);
};

const avoidTheWarriorsRecurse = (runway: Runway, position: Coordinate): number => {
    const isEnd: boolean = position.y == 0 && position.x == 0;
    const isEndOfLineOrWarriorAhead: boolean = position.y == 0 || runway[position.y-1][position.x] === 1;
    if(isEnd) {
        return 0;
    } else if (isEndOfLineOrWarriorAhead) {
        const newPosition: Coordinate = new Coordinate(position.x == 0 ? position.x + 1 : position.x - 1, position.y);
        return 1 + avoidTheWarriorsRecurse(runway, newPosition);
    }
    const newPosition: Coordinate = new Coordinate(position.x, position.y-1);
    return avoidTheWarriorsRecurse(runway, newPosition);
};

