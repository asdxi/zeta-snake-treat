//Generate random x and y coordinate for placing the treat 
//which is not on the boundaries of the board

export function createRandomTreat(gridSize: number) {
    const MIN = 1;
    const MAX = gridSize - 1;
    const xCoord = Math.floor(Math.random()) + (MAX - MIN);
    const yCoord = Math.floor(Math.random()) + (MAX - MIN);
    return { xCoord, yCoord };
}