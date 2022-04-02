import React from "react";
import TuiOptionControl, { TuiOptionControlProps} from "./TuiOptionControl";
import "./TuiCheckbox.css"

function TuiCheckbox(props: Omit<TuiOptionControlProps, "type">) {
  return (
    <TuiOptionControl type="checkbox" role="checkbox" { ...props } />
  )
}

export default TuiCheckbox;