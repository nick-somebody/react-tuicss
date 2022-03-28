import React from "react";
import TuiButton from "../components/TuiButton";
import { Color, MildColor } from "../types/enums";
import TuiCode from "../components/TuiCode";
import TuiFieldset from "../components/TuiFieldset";
import TuiLegend from "../components/TuiLegend";

function Buttons() {
  return (
    <div style={ { padding: "25px 0" } }>
      <h2>Buttons</h2>
      <div className="tui-window center blue-168" style={ { width: "200px" } }>
        <TuiFieldset>
          <TuiLegend>Buttons</TuiLegend>
          <TuiButton>Button</TuiButton>
          <TuiButton color={ Color.Yellow} textColor={ Color.Black } light>Button</TuiButton>
          <TuiButton fullWidth color={ MildColor.Orange } textColor={ Color.White }>Custom</TuiButton>
          <TuiButton fullWidth disabled={ true } color={ MildColor.Red }>Disabled</TuiButton>
          <TuiButton fullWidth>Focused</TuiButton>
        </TuiFieldset>
      </div>
      <h3>Code</h3>
      <TuiCode.Dark code={ `<TuiButton>Button</TuiButton>
<TuiButton color={ Color.Yellow} textColor={ Color.Black } light>Button</TuiButton>
<TuiButton fullWidth color={ MildColor.Orange } textColor={ Color.White }>Custom</TuiButton>
<TuiButton fullWidth disabled={ true } color={ MildColor.Red }>Disabled</TuiButton>
<TuiButton fullWidth>Focused</TuiButton>` } />
    </div>
  )
}

export default Buttons;