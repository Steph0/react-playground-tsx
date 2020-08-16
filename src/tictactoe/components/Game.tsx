import React from 'react';
import { Board } from './Board';
import { Coup } from '../dto/Coup';
import { hasWinner } from '../services/winner';
import { GameInfo } from './GameInfo';

interface IGameState {
    winner?: Coup,
    coupType: Coup,
    lastCoupIdx?: number,
    playground: Array<Coup>
}

export class Game extends React.Component {

    state: Readonly<IGameState> = { coupType: Coup.X, playground: new Array(9).fill(null) };

    handleSquareClick(index: number): void {

        // Important to work on a copy to not mutate state directly
        const playground = [...this.state.playground];
        if (this.state.winner || playground[index]) {
            // prevent click if we have a winner of i that cell is already filled
            return;
        }

        playground[index] = this.state.coupType;

        const winner = hasWinner(playground);
        this.setState({
            winner,
            lastCoupIdx: index,
            coupType: (this.state.coupType === Coup.X) ? Coup.O : Coup.X,
            playground
        });
    }



    render(): JSX.Element {
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        playground={this.state.playground}
                        lastCoupIdx={this.state.lastCoupIdx}
                        onClick={(index) => this.handleSquareClick(index)}
                    />
                </div>
                <div className="game-info">
                    <GameInfo winner={this.state.winner} nextPlayer={this.state.coupType} history={[]} />
                </div>
            </div>
        );
    }

}
