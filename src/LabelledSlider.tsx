import {Typography} from "@material-ui/core";
import {Slider} from "@material-ui/lab";
import React from "react";

/**
 * Created by acc15 on 30.12.18.
 */

export interface SliderProps {

    id: string;
    label: string;
    value: number;
    min: number;
    max: number;
    step?: number;
    onChange(value: number): void;

}

const LabelledSlider: React.FunctionComponent<SliderProps> = ({ id, label, value, min, max, step, onChange}) => <>
    <Typography id={id}>{label}</Typography>
    <Slider min={min} max={max} value={value} style={{padding: "22px 0"}} step={step} aria-labelledby={id} onChange={(e, value) => onChange(value)}/>
    <div style={{textAlign: "center", width: "100%"}}>{ value }</div>
</>;


export default LabelledSlider;

