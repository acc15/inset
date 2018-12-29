
import {combineReducers, createStore, Reducer} from "redux";

export interface Point {
    x: number;
    y: number;
}

interface RootStore {
    inset: number;
    gridX: number;
    gridY: number;
    points: Array<Point>;
}

export type ImmutableRootStore = Readonly<RootStore>;


interface SetInsetAction {
    type: "SET_INSET";
    inset: number;
}

interface SetGridXAction {
    type: "SET_GRID_X";
    gridX: number;
}

interface SetGridYAction {
    type: "SET_GRID_Y";
    gridY: number;
}

export const setInset = (inset: number): SetInsetAction => ({type: "SET_INSET", inset });
export const setGridX = (gridX: number): SetGridXAction => ({type: "SET_GRID_X", gridX });
export const setGridY = (gridY: number): SetGridYAction => ({type: "SET_GRID_Y", gridY });
export const addPoint = (point: Point): AddPointAction => ({type: "ADD_POINT", point});

interface AddPointAction {
    type: "ADD_POINT";
    point: Point;
}


export type AnyAction = SetInsetAction | SetGridXAction | SetGridYAction | AddPointAction;

const inset: Reducer<number, AnyAction> = (state = 0, action) => action.type === "SET_INSET" ? action.inset : state;
const gridX: Reducer<number, AnyAction> = (state = 0, action) => action.type === "SET_GRID_X" ? action.gridX : state;
const gridY: Reducer<number, AnyAction> = (state = 0, action) => action.type === "SET_GRID_Y" ? action.gridY : state;
const points: Reducer<Array<Point>, AnyAction> = (state = [], action) => action.type === "ADD_POINT" ? [...state, action.point] : state;

const reducers = combineReducers<ImmutableRootStore, AnyAction>({
    inset,
    points,
    gridX,
    gridY
});

const store = createStore(reducers);

export default store;