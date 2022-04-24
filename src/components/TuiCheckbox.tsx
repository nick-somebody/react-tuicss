import type { FC } from "react";
import TuiOptionControl, { TuiOptionControlProps } from "./TuiOptionControl";
import "./TuiCheckbox.css"

export interface TuiCheckboxProps extends Omit<TuiOptionControlProps, "type"> {}

const TuiCheckbox: FC<TuiCheckboxProps> = (props: TuiCheckboxProps) => {
  return (
    <TuiOptionControl type="checkbox" role="checkbox" { ...props } />
  )
}

export default TuiCheckbox;