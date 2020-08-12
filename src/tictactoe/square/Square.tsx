import React from 'react';
import { ISquareProps } from './ISquareProps';

export const Square: React.FC<ISquareProps> = (props) => {
    return (
        <button className="square" onClick={() => props.onClick()}>
            {props.value}
        </button>
    );
};
