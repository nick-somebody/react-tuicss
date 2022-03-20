import React, { InputHTMLAttributes } from "react";
import { radioClass } from "../helpers";
import TuiInput from "./TuiInput";
import "./TuiRadio.css";

export type TuiRadioProps = InputHTMLAttributes<HTMLInputElement> & {
  label: React.ReactNode;
}

function TuiRadio(props: TuiRadioProps) {
  return (
    <label className={ radioClass(props) }>
      { props.label }
      <TuiInput {...props} type="radio" />
      <span className={ props.disabled ? 'disabled' : '' }></span>
    </label>
  )
}

export default TuiRadio;