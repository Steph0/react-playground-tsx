import React from 'react';
import { Board } from './Board';
import { Coup } from '../dto/Coup';
import { hasWinner } from '../services/WinnerService';
import { GameInfo } from './GameInfo';

interface IGameState {
    winner?: Coup,
    nextCoupType: Readonly<Coup>,
    cellsHighlighted?: Array<number>,
    playground: Array<Coup>
}

export class Game extends React.Component {

    state: Readonly<IGameState> = { nextCoupType: Coup.X, playground: new Array(9).fill(null) };

    handleSquareClick = (index: number): void => {

        // Important to work on a copy to not mutate state directly
        const playground = [...this.state.playground];
        if (this.state.winner || playground[index]) {
            // prevent click if we have a winner of if that cell is already filled
            return;
        }
        // Place coup played
        playground[index] = this.state.nextCoupType;

        // Check game state
        const winnerFound = hasWinner(playground);
        const winner = winnerFound?.coup;
        const cellsHighlighted = (winnerFound) ? winnerFound.combination : [index];
        
        this.setState({
            winner,
            cellsHighlighted,
            nextCoupType: (this.state.nextCoupType === Coup.X) ? Coup.O : Coup.X,
            playground
        });
    }



    render(): JSX.Element {
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        playground={this.state.playground}
                        cellsHighlighted={this.state.cellsHighlighted}
                        onClick={this.handleSquareClick}
                    />
                </div>
                <div className="game-info">
                    <GameInfo winner={this.state.winner} nextPlayer={this.state.nextCoupType} history={[]} />
                </div>
            </div>
        );
    }

}
