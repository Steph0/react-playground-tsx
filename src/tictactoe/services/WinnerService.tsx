import { Coup } from "../dto/Coup";
import { Winner } from "../dto/Winner";

const COMBINATIONS: Array<number[]> = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

/**
 * Determine if the given board has a winning situation
 * @param board current board state
 * @returns winning combination detected
 */
export function hasWinner(board: Array<Coup>): Winner| undefined {
    for (const combination of COMBINATIONS) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
            return new Winner(board[a], combination);
        }
    }
    return undefined;
}