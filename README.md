# react-nyan

Insert at hidden flappy-bird clone with nyan-cat into your React application!

[Demo](https://therebelrobot.com/react-nyan)

Defaults to binding to Ctrl + Option + Command + Shift + n on Mac (ctrl+alt+win+shift+n on windows). You can override this with the `hotkey` attribute. Valid hotkey combos are pulled from [react-hotkeys](https://github.com/greena13/react-hotkeys#key-combinations--sequences)

> ***Caveat:*** This module imports it's own css file for styling, which requires you to have a css loader in webpack. If you're not using webpack or don't have a css loader, you'll need to import the clean index and the css file as demonstrated below. Why didn't I do something different? Because I'm lazy and there's not much ROI on this module since it's kinda a gimmick module in the first place. If you'd like to refactor it to work without this, please submit a pull request, because I'm not gonna do it.

## Install

```
npm install --save react-nyan

// or

yarn add react-nyan
```

## Developer Usage

(pretty much the same as the demo page)
```
import React from "react";
import { render } from "react-dom";

// if you have webpack and css-loader:
import Nyan from "react-nyan";

// if not, you'll need to load them separately using whatever loader you use:
// import Nyan from "react-nyan/lib/index-clean"
// import "react-nyan/lib/styles.css"

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
```
