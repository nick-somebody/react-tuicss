import React, { InputHTMLAttributes } from "react";
import { checkboxClass, optionSpanClass } from "../helpers";
import TuiInput from "./TuiInput";
import "./TuiCheckbox.css"

export type TuiCheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: React.ReactNode;
}

function TuiCheckbox(props: TuiCheckboxProps) {
  return (
    <label className={ checkboxClass(props) }>
      { props.label }
      <TuiInput {...props} type="checkbox" />
      <span className={ optionSpanClass(props) }></span>
    </label>
  )
}

export default TuiCheckbox;