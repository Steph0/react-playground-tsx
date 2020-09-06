import React from 'react';
import { Coup } from '../dto/Coup';
import { Square } from './Square';

interface IBoardProps {
    playground: Array<Coup>,
    cellsHighlighted: Array<number>,
    onClick(index: number): void
}

export class Board extends React.Component<IBoardProps> {

    static defaultProps = {
        cellsHighlighted: []
    }

    getSquareClassNames(index: number, cellsHighlighted: Array<number>) {
        return cellsHighlighted.includes(index) ? "highlight" : "";
    }

    renderSquare(index: number): JSX.Element {
        return (
            <Square
                key={index}
                value={this.props.playground[index]}
                classNames={this.getSquareClassNames(index, this.props.cellsHighlighted)}
                onClick={() => this.props.onClick(index)} />
        );
    }

    renderRow(indexes: Array<number>): JSX.Element {
        return (
            <div className="board-row">{
                indexes.map((idx: number) => {
                    return this.renderSquare(idx);
                })
            }</div>
        )
    }


    render(): JSX.Element {

        return (
            <React.Fragment>
                {this.renderRow([0, 1, 2])}
                {this.renderRow([3, 4, 5])}
                {this.renderRow([6, 7, 8])}
            </React.Fragment>
        );
    }
}
