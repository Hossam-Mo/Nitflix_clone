import React from "react";
import ReactDOM from "react-dom";
import Render from "./Render";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Render />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
