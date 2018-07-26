import React from "react";
import { render } from "react-dom";
import Nyan from "../../lib";
import "./styles.css";

function Demo() {
  return (
    <div>
      <h1>Demo (press ctrl+alt+win+shift+n on windows, and ctrl+option+command+shift+n on mac)</h1>
      <Nyan />
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
