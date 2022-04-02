import React from "react";
import TuiOptionControl, { TuiOptionControlProps} from "./TuiOptionControl";
import "./TuiCheckbox.css"

export type TuiCheckboxProps = Omit<TuiOptionControlProps, "type">

function TuiCheckbox(props: Omit<TuiOptionControlProps, "type">) {
  return (
    <TuiOptionControl type="checkbox" role="checkbox" { ...props } />
  )
}

export default TuiCheckbox;