import React from 'react';
import { Coup } from '../dto/Coup';

interface ISquareProps {
    value?: Coup; highlight: boolean, onClick: Function;
}

export const Square: React.FC<ISquareProps> = (props) => {
    const highlightClass = (props.highlight) ? " highlight" : "";
    return (
        <button className={"square" + highlightClass} onClick={() => props.onClick()}>
            {props.value}
        </button>
    );
};
