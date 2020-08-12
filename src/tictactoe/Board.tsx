import React from 'react';
import { Coup } from './enum/Coup';
import { Square } from './square/Square';

interface IBoardProps { }

interface IBoardState {
    coupType: Coup,
    playground: Array<Coup>
}

export class Board extends React.Component<IBoardProps, IBoardState> {

    state: Readonly<IBoardState> = { coupType: Coup.X, playground: [] };

    constructor(props: IBoardProps) {
        super(props);
        this.setState({ playground: new Array(9).fill(null) });
    }

    handleSquareClick(index: number) {
        // Important to work on a copy to not mutate state directly
        const playground = [...this.state.playground];
        playground[index] = this.state.coupType;

        this.setState({
            coupType: this.state.coupType === Coup.X ? Coup.O : Coup.X,
            playground
        });
    }

    renderSquare(index: number) {
        return (
            <Square
                value={this.state.playground[index]}
                onClick={() => this.handleSquareClick(index)} />
        );
    }


    render() {
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
