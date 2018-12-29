import {Grid, Typography} from "@material-ui/core";
import {Slider} from "@material-ui/lab";
import React from 'react';
import {connect} from "react-redux";
import {ImmutableRootStore, setInset} from "./store";

interface ControlPaneProps {
    inset: number;
    onSetInset(inset: number): void;
}

const ControlPane: React.FunctionComponent<ControlPaneProps> = ({ inset, onSetInset }) =>
    <Grid container direction="row" id="controlPane">
        <Typography id="insetLabel">Inset</Typography>
        <Slider min={-100} max={100} value={inset} style={{padding: "22px 0"}} onChange={(e, value) => onSetInset(value)} aria-labelledby="insetLabel"/>
        <div style={{textAlign: "center", width: "100%"}}>{ inset }</div>
    </Grid>;

export default connect(
    (store: ImmutableRootStore) => ({ inset: store.inset }),
    dispatch => ({ onSetInset: (inset: number) => dispatch(setInset(inset)) })
)(ControlPane);
