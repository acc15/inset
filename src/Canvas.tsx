import React from "react";
import {connect} from "react-redux";
import {ImmutableRootStore} from "./store";
import Vec2 from "./Vec2";


interface CanvasProps {
    inset: number;
    gridX: number;
    gridY: number;
}

function gridLines(grid: number, dim: number, center: number, onDraw: (offset: number, i: number, total: number) => void) {
    const off: number = center % grid;
    const lines: number = dim / grid + 1;
    for (let i = 0; i < lines; i++) {
        const x = off + i * grid;
        onDraw(x, i, lines);
    }
}


class Canvas extends React.Component<CanvasProps> {

    private readonly ref: React.RefObject<HTMLCanvasElement>;

    constructor(props: CanvasProps) {
        super(props);
        this.ref = React.createRef();
    }


    componentDidMount(): void {
        this.updateCanvas();
        window.onresize = this.updateCanvas;
    }

    componentDidUpdate(): void {
        this.updateCanvas();
    }

    updateCanvas = () => {
        const canvas = this.ref.current;
        if (!canvas) {
            return;
        }

        const parent = canvas.parentElement;
        if (parent) {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
        }

        const ctx = canvas.getContext("2d");
        if (!ctx) {
            return;
        }

        this.draw(ctx);
    };


    draw(ctx: CanvasRenderingContext2D) {

        const dim: Vec2 = new Vec2(ctx.canvas.width, ctx.canvas.height);
        const center: Vec2 = dim.div(2);
        const grid: Vec2 = new Vec2(this.props.gridX, this.props.gridY);



        const centerThickness = 10;
        if (grid.x > 0) {
            gridLines(grid.x, dim.x, center.x, offset => {

                ctx.strokeStyle = offset == center.x ? "black" : "lightgray";
                ctx.beginPath();
                ctx.moveTo(offset, 0);
                ctx.lineTo(offset, dim.y);
                ctx.stroke();
                ctx.closePath();

            });
        }
        if (grid.y > 0) {
            gridLines(grid.y, dim.y, center.y, offset => {

                ctx.strokeStyle = offset === center.y ? "black" : "lightgray";
                ctx.beginPath();
                ctx.moveTo(0, offset);
                ctx.lineTo(dim.x, offset);
                ctx.stroke();
                ctx.closePath();
            });
        }


        ctx.fillStyle = "black";
        ctx.fillRect(center.x - centerThickness / 2, center.y - centerThickness / 2, centerThickness, centerThickness);


    }

    drawGrid() {


    }


    public render() {
        return <canvas ref={this.ref}/>;
    }
}


const ReduxCanvas = connect((store: ImmutableRootStore) => ({inset: store.inset, gridX: store.gridX, gridY: store.gridY}))(Canvas);

export default ReduxCanvas;