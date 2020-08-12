import React from 'react';
import { Coup } from './enum/Coup';
import { Square } from './square/Square';
import { hasWinner } from './services/winner';

interface IBoardProps { }

interface IBoardState {
    winner?: Coup,
    coupType: Coup,
    playground: Array<Coup>
}

export class Board extends React.Component<IBoardProps, IBoardState> {

    state: Readonly<IBoardState> = { coupType: Coup.X, playground: new Array(9).fill(null) };

    handleSquareClick(index: number): void {
        if (this.state.winner) {
            // prevent click
            return;
        }

        // Important to work on a copy to not mutate state directly
        const playground = [...this.state.playground];
        playground[index] = this.state.coupType;

        const winner = hasWinner(playground);
        this.setState({
            winner,
            coupType: this.state.coupType === Coup.X ? Coup.O : Coup.X,
            playground
        });
    }

    renderSquare(index: number): JSX.Element {
        return (
            <Square
                value={this.state.playground[index]}
                onClick={() => this.handleSquareClick(index)} />
        );
    }


    render(): JSX.Element {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
