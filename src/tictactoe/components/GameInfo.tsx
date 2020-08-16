import React from "react";
import { Coup } from "../dto/Coup";

interface IGameInfoProps {
    winner?: Coup,
    nextPlayer: Coup,
    history: Array<Array<Coup>>
}

export class GameInfo extends React.Component<IGameInfoProps>{

    renderGameStatus(): React.ReactNode {
        if (!this.props.winner) {
            return `Waiting for ${this.props.nextPlayer} to play`
        }

        return `And the winner is.. ${this.props.winner}! Congrats!`
    }

    render(): JSX.Element {
        return (
            <div>
                <div>{this.renderGameStatus()}</div>
                <ol></ol>
            </div>
        );
    }

}