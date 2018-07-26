import React from "react";
import { render } from "react-dom";
import Nyan from "../lib";
import "./styles.css";

function Demo() {
  return (
    <div>
      <h1>Demo (press ctrl+alt+win+shift+n on windows, and ctrl+option+command+shift+n on mac)</h1>
      <Nyan />
      <hr />
      <h1>Demo with custom hotkey (press ctrl+n)</h1>
      <Nyan hotkey="ctrl+n"/>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
