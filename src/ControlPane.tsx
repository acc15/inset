import {Grid} from "@material-ui/core";
import React from 'react';
import {connect} from "react-redux";
import LabelledSlider from "./LabelledSlider";
import {ImmutableRootStore, setGridX, setGridY, setInset} from "./store";

interface ControlPaneProps {
    inset: number;
    onSetInset(inset: number): void;

    gridX: number;
    onSetGridX(gridX: number): void;

    gridY: number;
    onSetGridY(gridY: number): void;
}

const ControlPane: React.FunctionComponent<ControlPaneProps> = ({ inset, gridX, gridY, onSetInset, onSetGridX, onSetGridY }) =>
    <Grid container direction="row" id="controlPane">
        <LabelledSlider id="inset" label="Inset" value={inset} onChange={onSetInset} min={-100} max={100}/>
        <LabelledSlider id="gridX" label="Grid X" value={gridX} onChange={onSetGridX} min={0} max={100} step={1}/>
        <LabelledSlider id="gridY" label="Grid Y" value={gridY} onChange={onSetGridY} min={0} max={100} step={1}/>
    </Grid>;


const ReduxControlPane = connect(
    (store: ImmutableRootStore) => ({ inset: store.inset, gridX: store.gridX, gridY: store.gridY }),
    dispatch => ({
        onSetInset: (inset: number) => dispatch(setInset(inset)),
        onSetGridX: (gridX: number) => dispatch(setGridX(gridX)),
        onSetGridY: (gridY: number) => dispatch(setGridY(gridY))
    })
)(ControlPane);

export default ReduxControlPane;
