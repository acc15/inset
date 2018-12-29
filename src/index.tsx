import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import ControlPane from "./ControlPane";
import Canvas from "./Canvas";
import store from "./store";

import 'typeface-roboto';
import "./index.css";

const App = () => <Provider store={store}>
    <div id="leftPane" className="pane">
        <Canvas/>
    </div>
    <div id="rightPane" className="pane">
        <ControlPane/>
    </div>
</Provider>;

ReactDOM.render(<App/>, document.getElementById("root"));

