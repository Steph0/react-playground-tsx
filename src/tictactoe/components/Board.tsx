import React from 'react';
import { Coup } from '../dto/Coup';
import { Square } from './Square';

interface IBoardProps {
    playground: Array<Coup>,
    lastCoupIdx?: number,
    onClick(index: number): void
}

export class Board extends React.Component<IBoardProps> {

    renderSquare(index: number): JSX.Element {
        return (
            <Square
                value={this.props.playground[index]}
                highlight={this.props.lastCoupIdx === index}
                onClick={() => this.props.onClick(index)} />
        );
    }


    render(): JSX.Element {
        return (
            <div>
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