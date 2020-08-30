import React from 'react';
import { Coup } from '../dto/Coup';

interface ISquareProps {
    value?: Coup; classNames: string, onClick: Function;
}

export const Square: React.FC<ISquareProps> = (props: ISquareProps) => {
    return (
        <button className={"square " + props.classNames} onClick={() => props.onClick()}>
            {props.value}
        </button>
    );
};
