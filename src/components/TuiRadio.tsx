import React from "react";
import TuiOptionControl, { TuiOptionControlProps } from "./TuiOptionControl";
import "./TuiRadio.css";

export type TuiRadioProps = Omit<TuiOptionControlProps, "type">

function TuiRadio(props: Omit<TuiOptionControlProps, "type">) {
  return (
    <TuiOptionControl type="radio" { ...props } />
  )
}

export default TuiRadio;