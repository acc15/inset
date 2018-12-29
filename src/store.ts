
import {combineReducers, createStore, Reducer} from "redux";

export interface Point {
    x: number;
    y: number;
}

interface RootStore {
    inset: number;
    points: Array<Point>;
}

export type ImmutableRootStore = Readonly<RootStore>;


interface SetInsetAction {
    type: "SET_INSET";
    inset: number;
}

export function setInset(inset: number): SetInsetAction {
    return {
        type: "SET_INSET",
        inset
    };
}


interface AddPointAction {
    type: "ADD_POINT";
    point: Point;
}

export function addPoint(point: Point): AddPointAction {
    return {
        type: "ADD_POINT",
        point
    };
}

export type AnyAction = SetInsetAction | AddPointAction;



const inset: Reducer<number, AnyAction> = (state = 0, action) => action.type === "SET_INSET" ? action.inset : state;
const points: Reducer<Array<Point>, AnyAction> = (state = [], action) => action.type === "ADD_POINT" ? [...state, action.point] : state;

const reducers = combineReducers<ImmutableRootStore, AnyAction>({
    inset,
    points
});


const store = createStore(reducers);

export default store;