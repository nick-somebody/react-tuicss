import type { FC } from "react";
import TuiOptionControl, { TuiOptionControlProps } from "./TuiOptionControl";
import "./TuiRadio.css";

export interface TuiRadioProps extends Omit<TuiOptionControlProps, "type"> {}

const TuiRadio: FC<TuiRadioProps> = (props: TuiRadioProps) => {
  return (
    <TuiOptionControl type="radio" { ...props } />
  )
}

export default TuiRadio;