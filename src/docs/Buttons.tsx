import React from "react";
import TuiButton from "../components/TuiButton";
import { Color, MildColor } from "../types/enums";

function Buttons() {
  return (
    <div className="center" style={ { padding: "25px 0" } }>
      <h2>Buttons</h2>
      <div className="tui-window blue-168" style={ { width: "200px" } }>
        <fieldset className="tui-fieldset">
          <legend>Buttons</legend>
          <TuiButton fullWidth>Button</TuiButton><br />
          <TuiButton fullWidth color={ MildColor.Orange } textColor={ Color.White }>Custom</TuiButton><br />
          <TuiButton fullWidth disabled={ true } color={ MildColor.Red }>Disabled</TuiButton><br />
          <TuiButton fullWidth style={ { marginBottom: "5px" } }>Focused</TuiButton><br />
        </fieldset>
      </div>
    </div>
  )
}

export default Buttons;