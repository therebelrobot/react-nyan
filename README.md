# react-nyan

Insert at hidden flappy-bird clone with nyan-cat into your React application!

[Demo](https://therebelrobot.com/react-nyan)

Defaults to binding to Ctrl + Option + Command + Shift + n on Mac (ctrl+alt+win+shift+n on windows). You can override this with the `hotkey` attribute. Valid hotkey combos are pulled from [react-hotkeys](https://github.com/greena13/react-hotkeys#key-combinations--sequences)

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
import Nyan from "react-nyan";

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

## Credit
This was pulled (with love) from [codepen.io/Shmiddty](https://codepen.io/Shmiddty/pen/ezHJD)

## License
[MIT](https://tldrlegal.com/license/mit-license)
