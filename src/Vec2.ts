import {Point} from "./store";


class Vec2 implements Point {

    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public div(n: number): Vec2 {
        return new Vec2(this.x / n, this.y / n);
    }

    public mul(n: number): Vec2 {
        return new Vec2(this.x * n, this.y * n);
    }


}

export default Vec2;