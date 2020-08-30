import { Coup } from "./Coup";
export class Winner {
    coup: Coup;
    combination: Array<number>;

    constructor(coup: Coup, combination: Array<number>) {
        this.coup = coup;
        this.combination = combination;
    }
}
